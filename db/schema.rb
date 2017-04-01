# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170328034543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "day_stats", force: :cascade do |t|
    t.date     "stat_date"
    t.float    "spending_amount"
    t.float    "resting_heart_rate"
    t.float    "cardio_mins"
    t.float    "fat_burn_mins"
    t.float    "peak_mins"
    t.float    "total_minutes_asleep"
    t.float    "awakenings_count"
    t.datetime "sleep_start_time"
    t.float    "cycling"
    t.float    "running"
    t.float    "stationary"
    t.float    "transport"
    t.float    "walking"
    t.float    "active"
    t.float    "high_temp"
    t.float    "low_temp"
    t.float    "precip_inches"
    t.float    "snow_inches"
    t.float    "snow_depth_inches"
    t.datetime "sunrise"
    t.datetime "sunset"
    t.integer  "year"
    t.integer  "month"
    t.integer  "day_of_week"
    t.boolean  "is_weekend"
    t.float    "week"
    t.string   "season"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.uuid     "user_id"
    t.index ["user_id"], name: "index_day_stats_on_user_id", using: :btree
  end

  create_table "users", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "age"
    t.string   "gender"
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
