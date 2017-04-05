module UsersHelper
  def chart_labels(days)
    labels = []
    days.each do |day|
      labels << day.stat_date.to_s
    end
    return labels
  end

  def activity_data(days)
    activity = []
    days.each do |day|
      activity << (day.active/60).round() if day.active
    end
    return activity
  end

  def sleep_data(days)
    sleep = []
    days.each do |day|
      sleep << (day.total_minutes_asleep/60).round(1) if day.total_minutes_asleep
    end
    return sleep
  end

  def heartrate_data(days)
    heartrate = []
    days.each do |day|
      heartrate << day.resting_heart_rate if day.resting_heart_rate
    end
    return heartrate
  end

  def activity_breakdown(yesterday_stat)
    active = yesterday_stat.active/60 if yesterday_stat.active
    sleep_min = yesterday_stat.total_minutes_asleep 
    sedentary = 1440 - (active + sleep_min)
    return [active, sedentary, sleep_min]
  end
end