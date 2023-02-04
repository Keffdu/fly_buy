class ChangeDefaultToUserImage < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :image, "https://content.presentermedia.com/files/clipart/00016000/16232/pilot_flying_on_airplane_800_wht.jpg"
  end
end
