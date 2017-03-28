FactoryGirl.define do
  factory :day_stat do
    amount 45.00
    resting_heart_rate 63.0
    cardio_mins 20.0
    fat_burn_mins 15.0
    peak_mins 0.0
    total_minutes_asleep 400
    awakenings_count "3"
    start_time "MyString"
    cycling 20.0
    running 0.0
    stationary 400.0
    transport 15.0
    walking 35.0
    active "MyString"
    high_temp 48
    low_temp 28
    precip_inches 0.0
    snow_inches 0.0
    snow_depth_inches 0.0
    sunrise "MyString"
    sunset "MyString"
    year 2017
    month 3
    day_of_week 4
    is_weekend true
    week 6
    season "summer"
  end
end
