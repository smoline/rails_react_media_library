class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :description
      t.integer :tmdb_id
      t.string :imdb_id
      t.string :realease_date
      t.integer :runtime
      t.string :tagline
      t.string :movie_image_url

      t.timestamps
    end
  end
end
