class CreateAircrafts < ActiveRecord::Migration[7.0]
  def change
    create_table :aircrafts do |t|
      t.belongs_to :airport, null: false, foreign_key: true
      t.string :manufacturer
      t.string :model
      t.integer :model_year
      t.integer :hours
      t.text :description
      t.string :image
      t.integer :hourly_rate

      t.timestamps
    end
  end
end
