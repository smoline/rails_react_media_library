class CreateOwners < ActiveRecord::Migration[6.0]
  def change
    create_table :owners do |t|
      t.string :notes
      t.bigint :upc
      t.integer :rating
      t.references :user, null: false, foreign_key: true
      t.references :ownable, polymorphic: true

      t.timestamps
    end
  end
end
