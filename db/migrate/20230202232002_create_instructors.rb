class CreateInstructors < ActiveRecord::Migration[7.0]
  def change
    create_table :instructors do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :email
      t.integer :age
      t.string :image
      t.integer :flight_hours
      t.belongs_to :aircraft, null: false, foreign_key: true

      t.timestamps
    end
  end
end
