class CreateCrews < ActiveRecord::Migration[6.0]
  def change
    create_table :crews do |t|
      t.string :department
      t.string :job
      t.references :person, null: false, foreign_key: true
      t.references :crewable, polymorphic: true

      t.timestamps
    end
  end
end
