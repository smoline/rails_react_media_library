# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_23_154601) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "casts", force: :cascade do |t|
    t.string "character"
    t.bigint "person_id", null: false
    t.string "castable_type"
    t.bigint "castable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["castable_type", "castable_id"], name: "index_casts_on_castable_type_and_castable_id"
    t.index ["person_id"], name: "index_casts_on_person_id"
  end

  create_table "crews", force: :cascade do |t|
    t.string "department"
    t.string "job"
    t.bigint "person_id", null: false
    t.string "crewable_type"
    t.bigint "crewable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["crewable_type", "crewable_id"], name: "index_crews_on_crewable_type_and_crewable_id"
    t.index ["person_id"], name: "index_crews_on_person_id"
  end

  create_table "movies", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "tmdb_id"
    t.string "imdb_id"
    t.string "realease_date"
    t.integer "runtime"
    t.string "tagline"
    t.string "movie_image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "owners", force: :cascade do |t|
    t.string "notes"
    t.bigint "upc"
    t.integer "rating"
    t.bigint "user_id", null: false
    t.string "ownable_type"
    t.bigint "ownable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ownable_type", "ownable_id"], name: "index_owners_on_ownable_type_and_ownable_id"
    t.index ["user_id"], name: "index_owners_on_user_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "name"
    t.string "biography"
    t.string "birthday"
    t.string "deathday"
    t.integer "tmdb_people_id"
    t.string "imdb_people_id"
    t.string "place_of_birth"
    t.string "gender"
    t.string "profile_path_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "casts", "people"
  add_foreign_key "crews", "people"
  add_foreign_key "owners", "users"
end
