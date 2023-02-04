class MakeDefaultForCompletedFalse < ActiveRecord::Migration[7.0]
  def change
    change_column_default :flight_lessons, :completed, false
  end
end
