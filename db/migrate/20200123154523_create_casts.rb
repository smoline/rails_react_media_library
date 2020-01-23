class CreateCasts < ActiveRecord::Migration[6.0]
  def change
    create_table :casts do |t|
      t.string :character
      t.references :person, null: false, foreign_key: true
      t.references :castable, polymorphic: true

      t.timestamps
    end
  end
end
