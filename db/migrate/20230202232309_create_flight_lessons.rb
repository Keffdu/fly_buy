class CreateFlightLessons < ActiveRecord::Migration[7.0]
  def change
    create_table :flight_lessons do |t|
      t.string :date
      t.string :airport
      t.string :start_time
      t.string :end_time
      t.text :notes
      t.boolean :completed
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :aircraft, null: false, foreign_key: true

      t.timestamps
    end
  end
end
