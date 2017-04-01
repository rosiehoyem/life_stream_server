class CreateDayStats < ActiveRecord::Migration[5.0]
  def change
    create_table :day_stats do |t|
      t.date :stat_date
      t.float :spending_amount
      t.float :resting_heart_rate
      t.float :cardio_mins
      t.float :fat_burn_mins
      t.float :peak_mins
      t.float :total_minutes_asleep
      t.float :awakenings_count
      t.datetime :sleep_start_time
      t.float :cycling
      t.float :running
      t.float :stationary
      t.float :transport
      t.float :walking
      t.float :active
      t.float :high_temp
      t.float :low_temp
      t.float :precip_inches
      t.float :snow_inches
      t.float :snow_depth_inches
      t.datetime :sunrise
      t.datetime :sunset
      t.integer :year
      t.integer :month
      t.integer :day_of_week
      t.boolean :is_weekend
      t.float :week
      t.string :season

      t.timestamps
    end
    add_column :day_stats, :user_id, :uuid
    add_index :day_stats, :user_id
  end
end
