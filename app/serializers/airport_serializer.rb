class AirportSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :address, :state, :phone_number, :email
end
