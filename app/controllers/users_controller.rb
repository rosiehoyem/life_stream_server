class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
    render layout: 'user_layout'
  end

  def show
    render layout: 'user_layout'
  end

  def new
    @user = User.new
    render layout: 'user_layout'
  end

  def edit
    render layout: 'user_layout'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user, notice: 'User was successfully created.' 
    else
      render :new 
    end
  end

  def update
    if params[:user][:password].blank? && params[:user][:password_confirmation].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end
    if @user.update(user_params)
      redirect_to @user, notice: 'User was successfully updated.' 
    else
      render :edit 
    end
  end

  def destroy
    @user.destroy
    redirect_to users_url, notice: 'User was successfully destroyed.' 
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(
      # :first_name, 
      # :last_name, 
      # :age, 
      # :gender, 
      # :address, 
      # :city, 
      # :state, 
      # :zip, 
      # :email, 
      # :password, 
      # :password_confirmation
    )
  end
end
