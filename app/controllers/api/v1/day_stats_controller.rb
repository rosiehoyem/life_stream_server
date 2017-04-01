class Api::V1::DayStatsController < Api::ApiController

  def show
    @user = User.find(params[:user_id])
    @day_stat = @user.day_stats.find(params[:id])
  end

  def create 
    @user = User.find(params[:user_id])
    @day_stat = DayStat.new(day_stat_params)
    binding.pry
    @day_stat.save
    render :show, status: :created
  end

  private

  def set_day_stat
    @day_stat = DayStat.find(params[:id])
  end

  def day_stat_params
    params.require(:day_stat).permit(
      :stat_date,
      :user_id,
      :spending_amount, 
      :resting_heart_rate, 
      :cardio_mins, 
      :fat_burn_mins, 
      :peak_mins, 
      :total_minutes_asleep, 
      :awakenings_countstart_time, 
      :cycling, 
      :running, 
      :stationary, 
      :transport, 
      :walking, 
      :active, 
      :high_temp, 
      :low_temp, 
      :precip_inches, 
      :snow_inches, 
      :snow_depth_inches, 
      :sunrise, 
      :sunset, 
      :year, 
      :month, 
      :day_of_week, 
      :is_weekend, 
      :week, 
      :season)
  end
end
