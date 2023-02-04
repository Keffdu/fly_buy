class MakeDefaultForFlightNotes < ActiveRecord::Migration[7.0]
  def change
    change_column_default :flight_lessons, :notes, "Flight Notes"
  end
end
