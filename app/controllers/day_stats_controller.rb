class DayStatsController < ApplicationController
  before_action :set_day_stat, only: [:show, :edit, :update, :destroy]

  # GET /day_stats
  def index
    @day_stats = DayStat.all
  end

  # GET /day_stats/1
  def show
  end

  # GET /day_stats/new
  def new
    @day_stat = DayStat.new
  end

  def edit
  end

  def create
    @day_stat = DayStat.new(day_stat_params)

    if @day_stat.save
      redirect_to @day_stat, notice: 'Day stat was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /day_stats/1
  def update
    if @day_stat.update(day_stat_params)
      redirect_to @day_stat, notice: 'Day stat was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @day_stat.destroy
    redirect_to day_stats_url, notice: 'Day stat was successfully destroyed.'
  end

  private
  
  def set_day_stat
    @day_stat = DayStat.find(params[:id])
  end

  def day_stat_params
    params.require(:day_stat).permit(:amount, :resting_heart_rate, :cardio_mins, :fat_burn_mins, :peak_mins, :total_minutes_asleep, :awakenings_countstart_time, :cycling, :running, :stationary, :transport, :walking, :active, :high_temp, :low_temp, :precip_inches, :snow_inches, :snow_depth_inches, :sunrise, :sunset, :year, :month, :day_of_week, :is_weekend, :week, :season)
  end
end
