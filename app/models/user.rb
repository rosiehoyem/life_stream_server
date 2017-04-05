class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :day_stats

  def stats_summary(attribute)
    stats = {}
    self.day_stats.each do |day|
      stats[day.stat_date] = day.send(attribute)
    end
    return stats
  end

  def all_time_stats(date_range, attribute)
    stats = self.stats_summary(attribute)
    wk = 1
    week_stats = {}
    date_range.each do |date|
      if stats[date] != nil
        week = date.cweek
        year = date.cwyear
        if week_stats[Date.commercial(year,week)] == nil
          week_stats[Date.commercial(year,week)] = []
        end
        week_stats[Date.commercial(year,week)].push(stats[date])
      end
    end
    week_labels = []
    week_tots = []
    [2015, 2016, 2017].each do |year|
      (1..52).each do |week|
        if week_stats[Date.commercial(year,week)]
          day_tots = week_stats[Date.commercial(year,week)]
          if day_tots.count >= 1 && day_tots.sum >= 1
            puts day_tots
            week_labels.push(Date.commercial(year,week).to_s)
            week_tots.push(day_tots.sum/day_tots.count)
          end
        end
      end
    end
    return week_labels, week_tots
  end

  def monthly_stats(date_range, attribute)
    stats = self.stats_summary(attribute)
    wk = 1
    month_stats = {}
    date_range.each do |date|
      if stats[date] != nil
        month = date.month.to_s
        year = date.cwyear.to_s
        if month_stats[Date.parse("#{year}-#{month}-01")] == nil
          month_stats[Date.parse("#{year}-#{month}-01")] = []
        end
        month_stats[Date.parse("#{year}-#{month}-01")].push(stats[date])
      end
    end
    month_labels = []
    month_tots = []
    (date_range.first.year..date_range.last.year).each do |year|
      (1..52).each do |week|
        if month_stats[Date.commercial(year,week)]
          day_tots = month_stats[Date.commercial(year,week)]
          if day_tots.count >= 1 && day_tots.sum >= 1
            puts day_tots
            month_labels.push(Date.commercial(year,week).to_s)
            month_tots.push(day_tots.sum/day_tots.count)
          end
        end
      end
    end
    return month_labels, month_tots.to_json
  end

  def habit_goal(date_range, attribute)
    stats = self.day_stats.where(stat_date: date_range)
    success_data = []
    failure_data = []
    labels = []
    stats.each do |stat|
      labels << stat.stat_date.to_s
      if stat.send(attribute) && stat.send(attribute) > 0
        success_data << stat.send(attribute)
        failure_data << nil
      else
        success_data << ""
        failure_data << 0
      end
    end
    return labels, success_data.to_json, failure_data.to_json
  end
end
