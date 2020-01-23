class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :biography
      t.string :birthday
      t.string :deathday
      t.integer :tmdb_people_id
      t.string :imdb_people_id
      t.string :place_of_birth
      t.string :gender
      t.string :profile_path_url

      t.timestamps
    end
  end
end
