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

ActiveRecord::Schema.define(version: 20170611033214) do

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.integer "carbs"
    t.integer "fat"
    t.integer "protein"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "foods_meals", id: false, force: :cascade do |t|
    t.integer "food_id"
    t.integer "meal_id"
    t.index ["food_id"], name: "index_foods_meals_on_food_id"
    t.index ["meal_id"], name: "index_foods_meals_on_meal_id"
  end

  create_table "meals", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "meals_foods", id: false, force: :cascade do |t|
    t.integer "meal_id"
    t.integer "food_id"
    t.index ["food_id"], name: "index_meals_foods_on_food_id"
    t.index ["meal_id"], name: "index_meals_foods_on_meal_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
