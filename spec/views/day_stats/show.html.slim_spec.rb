require 'rails_helper'

RSpec.describe "day_stats/show", type: :view do
  before(:each) do
    @day_stat = assign(:day_stat, DayStat.create!(
      :amount => "Amount",
      :resting_heart_rate => "Resting Heart Rate",
      :cardio_mins => "Cardio Mins",
      :fat_burn_mins => "Fat Burn Mins",
      :peak_mins => "Peak Mins",
      :total_minutes_asleep => "Total Minutes Asleep",
      :awakenings_countstart_time => "Awakenings Countstart Time",
      :cycling => "Cycling",
      :running => "Running",
      :stationary => "Stationary",
      :transport => "Transport",
      :walking => "Walking",
      :active => "Active",
      :high_temp => "High Temp",
      :low_temp => "Low Temp",
      :precip_inches => "Precip Inches",
      :snow_inches => "Snow Inches",
      :snow_depth_inches => "Snow Depth Inches",
      :sunrise => "Sunrise",
      :sunset => "Sunset",
      :year => "Year",
      :month => "Month",
      :day_of_week => "Day Of Week",
      :is_weekend => "Is Weekend",
      :week => "Week",
      :season => "Season"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Amount/)
    expect(rendered).to match(/Resting Heart Rate/)
    expect(rendered).to match(/Cardio Mins/)
    expect(rendered).to match(/Fat Burn Mins/)
    expect(rendered).to match(/Peak Mins/)
    expect(rendered).to match(/Total Minutes Asleep/)
    expect(rendered).to match(/Awakenings Countstart Time/)
    expect(rendered).to match(/Cycling/)
    expect(rendered).to match(/Running/)
    expect(rendered).to match(/Stationary/)
    expect(rendered).to match(/Transport/)
    expect(rendered).to match(/Walking/)
    expect(rendered).to match(/Active/)
    expect(rendered).to match(/High Temp/)
    expect(rendered).to match(/Low Temp/)
    expect(rendered).to match(/Precip Inches/)
    expect(rendered).to match(/Snow Inches/)
    expect(rendered).to match(/Snow Depth Inches/)
    expect(rendered).to match(/Sunrise/)
    expect(rendered).to match(/Sunset/)
    expect(rendered).to match(/Year/)
    expect(rendered).to match(/Month/)
    expect(rendered).to match(/Day Of Week/)
    expect(rendered).to match(/Is Weekend/)
    expect(rendered).to match(/Week/)
    expect(rendered).to match(/Season/)
  end
end
