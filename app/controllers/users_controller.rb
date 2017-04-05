class UsersController < ApplicationController
  layout 'user_layout'
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

  def dashboard
    @user = User.find(params[:user_id])
    @yesterday = Date.parse('2017-03-15')
    @yesterday_stat = @user.day_stats.where(stat_date: @yesterday).first
    @alltime_activity_labels, @alltime_activity = @user.all_time_stats((Date.commercial(2015,1)..(Date.today-1)), 'active')
    render layout: 'user_layout'
  end

  def time_series
    @user = User.find(params[:user_id])
    @yesterday = Date.parse('2017-03-15')
    @yesterday_stat = @user.day_stats.where(stat_date: @yesterday).first
    @week_stats = @user.day_stats.where(stat_date: (@yesterday-7)..@yesterday)
    @month_stats = @user.day_stats.where(stat_date: (@yesterday-30)..@yesterday)
    @alltime_activity_labels, @alltime_activity = @user.all_time_stats((Date.commercial(2015,1)..(Date.today-1)), 'active')
    @alltime_sleep_labels, @alltime_sleep = @user.all_time_stats((Date.commercial(2015,1)..(Date.today-1)), 'total_minutes_asleep')
    @alltime_heartrate_labels, @alltime_heartrate = @user.all_time_stats((Date.commercial(2015,1)..(Date.today-1)), 'resting_heart_rate')
    render layout: 'user_layout'
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
