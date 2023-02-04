class AddExperienceLevelToInstructors < ActiveRecord::Migration[7.0]
  def change
    add_column :instructors, :experience_level, :string
  end
end
