class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :address, :state, :phone_number, :email

  has_many :aircrafts
  has_many :instructors, through: :aircrafts
end
