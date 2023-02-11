class AircraftSerializer < ActiveModel::Serializer
  attributes :id, :manufacturer, :model, :hours, :description, :image, :hourly_rate, :full_plane_name

  belongs_to :airport
  has_one :instructor
  has_many :flight_lessons


  def full_plane_name
    "#{self.object.manufacturer} #{self.object.model}"
  end
end
