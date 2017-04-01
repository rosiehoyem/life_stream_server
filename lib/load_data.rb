require 'csv'
require 'open-uri'

class LoadData
  def self.read_and_load_csv
    dir = "data"
    file = File.join(dir, "summary_data.csv")
    if file
      CSV.parse(open(file).read, headers: true) do |row|
        user = User.where(email: 'rosiehoyem@gmail.com').first
        ds = DayStat.where(date: row['date']).first_or_create
        ds.user_id = user.id
        ds.amount = row['amount']
        ds.resting_heart_rate = row['resting_heart_rate']
        ds.cardio_mins = row['cardio_mins']
        ds.fat_burn_mins = row['fat_burn_mins']
        ds.peak_mins = row['peak_mins']
        ds.total_minutes_asleep = row['total_minutes_asleep']
        ds.awakenings_counts = row['awakenings_counts']
        ds.start_time = row['start_time']
        ds.cycling = row['cycling']
        ds.running = row['running']
        ds.stationary = row['stationary']
        ds.transport = row['transport']
        ds.walking = row['walking']
        ds.active = row['active']
        ds.high_temp = row['high_temp']
        ds.low_temp = row['low_temp']
        ds.precip_inches = row['precip_inches']
        ds.snow_inches = row['snow_inches']
        ds.snow_depth_inches = row['snow_depth_inches']
        ds.sunrise = row['sunrise']
        ds.sunset = row['sunset']
        ds.year = row['year']
        ds.month = row['month']
        ds.day_of_week = row['day_of_week']
        ds.is_weekend = row['is_weekend']
        ds.week = row['week']
        ds.season = row['season']
      end
    end
  end
end



