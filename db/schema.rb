 # This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_03_214330) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "aircrafts", force: :cascade do |t|
    t.bigint "airport_id", null: false
    t.string "manufacturer"
    t.string "model"
    t.integer "hours"
    t.text "description"
    t.string "image"
    t.integer "hourly_rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["airport_id"], name: "index_aircrafts_on_airport_id"
  end

  create_table "airports", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "address"
    t.string "state"
    t.string "phone_number"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flight_lessons", force: :cascade do |t|
    t.string "date"
    t.string "airport"
    t.string "start_time"
    t.string "end_time"
    t.text "notes", default: "Flight Notes"
    t.boolean "completed", default: false
    t.bigint "user_id", null: false
    t.bigint "aircraft_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["aircraft_id"], name: "index_flight_lessons_on_aircraft_id"
    t.index ["user_id"], name: "index_flight_lessons_on_user_id"
  end

  create_table "instructors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "email"
    t.integer "age"
    t.string "image"
    t.integer "flight_hours"
    t.bigint "aircraft_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "experience_level"
    t.index ["aircraft_id"], name: "index_instructors_on_aircraft_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.string "phone_number"
    t.string "email"
    t.integer "age"
    t.string "image", default: "https://content.presentermedia.com/files/clipart/00016000/16232/pilot_flying_on_airplane_800_wht.jpg"
    t.integer "flight_hours"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "aircrafts", "airports"
  add_foreign_key "flight_lessons", "aircrafts"
  add_foreign_key "flight_lessons", "users"
  add_foreign_key "instructors", "aircrafts"
end
