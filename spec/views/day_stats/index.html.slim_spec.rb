require 'rails_helper'

RSpec.describe "day_stats/index", type: :view do
  before(:each) do
    assign(:day_stats, [
      DayStat.create!(
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
      ),
      DayStat.create!(
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
      )
    ])
  end

  it "renders a list of day_stats" do
    render
    assert_select "tr>td", :text => "Amount".to_s, :count => 2
    assert_select "tr>td", :text => "Resting Heart Rate".to_s, :count => 2
    assert_select "tr>td", :text => "Cardio Mins".to_s, :count => 2
    assert_select "tr>td", :text => "Fat Burn Mins".to_s, :count => 2
    assert_select "tr>td", :text => "Peak Mins".to_s, :count => 2
    assert_select "tr>td", :text => "Total Minutes Asleep".to_s, :count => 2
    assert_select "tr>td", :text => "Awakenings Countstart Time".to_s, :count => 2
    assert_select "tr>td", :text => "Cycling".to_s, :count => 2
    assert_select "tr>td", :text => "Running".to_s, :count => 2
    assert_select "tr>td", :text => "Stationary".to_s, :count => 2
    assert_select "tr>td", :text => "Transport".to_s, :count => 2
    assert_select "tr>td", :text => "Walking".to_s, :count => 2
    assert_select "tr>td", :text => "Active".to_s, :count => 2
    assert_select "tr>td", :text => "High Temp".to_s, :count => 2
    assert_select "tr>td", :text => "Low Temp".to_s, :count => 2
    assert_select "tr>td", :text => "Precip Inches".to_s, :count => 2
    assert_select "tr>td", :text => "Snow Inches".to_s, :count => 2
    assert_select "tr>td", :text => "Snow Depth Inches".to_s, :count => 2
    assert_select "tr>td", :text => "Sunrise".to_s, :count => 2
    assert_select "tr>td", :text => "Sunset".to_s, :count => 2
    assert_select "tr>td", :text => "Year".to_s, :count => 2
    assert_select "tr>td", :text => "Month".to_s, :count => 2
    assert_select "tr>td", :text => "Day Of Week".to_s, :count => 2
    assert_select "tr>td", :text => "Is Weekend".to_s, :count => 2
    assert_select "tr>td", :text => "Week".to_s, :count => 2
    assert_select "tr>td", :text => "Season".to_s, :count => 2
  end
end
