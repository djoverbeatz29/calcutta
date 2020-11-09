class CreateGolfers < ActiveRecord::Migration[6.0]
  def change
    create_table :golfers do |t|
      t.string :name
      t.string :country
      t.datetime :dob
      t.boolean :is_selected, default: false
      t.integer :bid, default: 0
      t.references :owner, null: false, foreign_key: true

      t.timestamps
    end
  end
end
