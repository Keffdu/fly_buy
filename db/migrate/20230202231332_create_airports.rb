class CreateAirports < ActiveRecord::Migration[7.0]
  def change
    create_table :airports do |t|
      t.string :name
      t.string :image
      t.string :address
      t.string :state
      t.string :phone_number
      t.string :email

      t.timestamps
    end
  end
end
