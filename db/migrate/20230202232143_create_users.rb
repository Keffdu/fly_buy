class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :phone_number
      t.string :email
      t.integer :age
      t.string :image
      t.integer :flight_hours
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
