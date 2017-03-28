class Api::ApiController < ActionController::Base
  protect_from_forgery with: :null_session
  # skip_before_action :verify_authenticity_token # No session & API not browser based
  # before_action :authenticate_with_app_user_token
  before_action :require_json

  respond_to :json

  rescue_from(Exception) { |ex| api_exception_handler(ex) }

  private

  def api_exception_handler(ex)
    error_messages = []
    log_error(ex)
    message = ex.message
    case ex
    when ActiveRecord::RecordInvalid
      status = :unprocessable_entity
      error_messages = error_messages_from_errors(ex.record.errors)
    when ActionController::ParameterMissing
      status = :bad_request
      message = ex.message
    when ActiveRecord::UnknownAttributeError
      status = :bad_request
    when ActiveRecord::RecordNotFound
      status = :not_found
      message = 'Resource not found.'
    when ArgumentError, ActiveRecord::StatementInvalid
      status = :unprocessable_entity
      message = 'The specified datetime is invalid.' if ex.message == 'invalid date'
    when PG::InvalidTextRepresentation
      status = :unprocessable_entity
      message = 'One or more specified IDs is not a valid uuid.'
    when Api::ApiError
      status = ex.status
      message = ex.message
    else
      status = :internal_server_error
      message = 'Internal server error.'
    end
    response = { data: { message: message }, metadata: nil }
    response[:data][:errors] = error_messages if error_messages.any?
    render json: response, status: status
  end

  def log_error(exception)
    if exception
      Rails.logger.error(exception.message)
      Rails.logger.error(exception.backtrace.join("\n"))
    end
  end

  def require_json
    head :unsupported_media_type unless request.format == 'application/json'
  end

  def error_messages_from_errors(errors)
    errors.keys.map do |attribute|
      {
        attribute: attribute,
        messages: errors[attribute],
      }
    end
  end

  def authenticate_with_config_var_token
    authenticate_with_http_token do |token, options|
      @authentication_success = (token == Rails.configuration.account_list_api_token)
    end
    return @authentication_success || render_unauthorized
  end

  def authenticate_with_account_token
    authenticate_with_http_token do |token, options|
      @account = Account.find_by_account_token(token)
    end
    return @account || render_unauthorized
  end

  def authenticate_with_app_user_token
    authenticate_with_http_token do |token, options|
      @app_user = AppUser.find_by_app_user_token(token)
    end
    return @app_user || render_unauthorized
  end

  def render_unauthorized
    self.headers['WWW-Authenticate'] = 'Token realm="Application"'
    render(
      json: {
        data: { message: 'Authentication token required.' },
        metadata: {},
      },
      status: :unauthorized,
    )
  end
end