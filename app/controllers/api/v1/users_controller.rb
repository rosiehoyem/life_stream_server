class Api::V1::UsersController < Api::ApiController
  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    render :show, status: :ok
  end

  private

  def user_params
    params.require(:app_user).permit(:id)
  end
end