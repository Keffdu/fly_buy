class AircraftSerializer < ActiveModel::Serializer
  attributes :id, :manufacturer, :model, :hours, :description, :image, :hourly_rate
  has_one :airport
end
