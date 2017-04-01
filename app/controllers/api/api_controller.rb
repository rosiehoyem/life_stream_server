class Api::ApiController < ActionController::Base
  protect_from_forgery with: :exception
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
end