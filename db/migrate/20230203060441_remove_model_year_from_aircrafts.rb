class RemoveModelYearFromAircrafts < ActiveRecord::Migration[7.0]
  def change
    remove_column :aircrafts, :model_year
  end
end
