require 'rails_helper'

RSpec.describe "day_stats/new", type: :view do
  before(:each) do
    assign(:day_stat, DayStat.new(
      :amount => "MyString",
      :resting_heart_rate => "MyString",
      :cardio_mins => "MyString",
      :fat_burn_mins => "MyString",
      :peak_mins => "MyString",
      :total_minutes_asleep => "MyString",
      :awakenings_countstart_time => "MyString",
      :cycling => "MyString",
      :running => "MyString",
      :stationary => "MyString",
      :transport => "MyString",
      :walking => "MyString",
      :active => "MyString",
      :high_temp => "MyString",
      :low_temp => "MyString",
      :precip_inches => "MyString",
      :snow_inches => "MyString",
      :snow_depth_inches => "MyString",
      :sunrise => "MyString",
      :sunset => "MyString",
      :year => "MyString",
      :month => "MyString",
      :day_of_week => "MyString",
      :is_weekend => "MyString",
      :week => "MyString",
      :season => "MyString"
    ))
  end

  it "renders new day_stat form" do
    render

    assert_select "form[action=?][method=?]", day_stats_path, "post" do

      assert_select "input#day_stat_amount[name=?]", "day_stat[amount]"

      assert_select "input#day_stat_resting_heart_rate[name=?]", "day_stat[resting_heart_rate]"

      assert_select "input#day_stat_cardio_mins[name=?]", "day_stat[cardio_mins]"

      assert_select "input#day_stat_fat_burn_mins[name=?]", "day_stat[fat_burn_mins]"

      assert_select "input#day_stat_peak_mins[name=?]", "day_stat[peak_mins]"

      assert_select "input#day_stat_total_minutes_asleep[name=?]", "day_stat[total_minutes_asleep]"

      assert_select "input#day_stat_awakenings_countstart_time[name=?]", "day_stat[awakenings_countstart_time]"

      assert_select "input#day_stat_cycling[name=?]", "day_stat[cycling]"

      assert_select "input#day_stat_running[name=?]", "day_stat[running]"

      assert_select "input#day_stat_stationary[name=?]", "day_stat[stationary]"

      assert_select "input#day_stat_transport[name=?]", "day_stat[transport]"

      assert_select "input#day_stat_walking[name=?]", "day_stat[walking]"

      assert_select "input#day_stat_active[name=?]", "day_stat[active]"

      assert_select "input#day_stat_high_temp[name=?]", "day_stat[high_temp]"

      assert_select "input#day_stat_low_temp[name=?]", "day_stat[low_temp]"

      assert_select "input#day_stat_precip_inches[name=?]", "day_stat[precip_inches]"

      assert_select "input#day_stat_snow_inches[name=?]", "day_stat[snow_inches]"

      assert_select "input#day_stat_snow_depth_inches[name=?]", "day_stat[snow_depth_inches]"

      assert_select "input#day_stat_sunrise[name=?]", "day_stat[sunrise]"

      assert_select "input#day_stat_sunset[name=?]", "day_stat[sunset]"

      assert_select "input#day_stat_year[name=?]", "day_stat[year]"

      assert_select "input#day_stat_month[name=?]", "day_stat[month]"

      assert_select "input#day_stat_day_of_week[name=?]", "day_stat[day_of_week]"

      assert_select "input#day_stat_is_weekend[name=?]", "day_stat[is_weekend]"

      assert_select "input#day_stat_week[name=?]", "day_stat[week]"

      assert_select "input#day_stat_season[name=?]", "day_stat[season]"
    end
  end
end
