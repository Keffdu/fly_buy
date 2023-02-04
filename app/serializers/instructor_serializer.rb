class InstructorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email, :age, :image, :flight_hours
  has_one :aircraft
end
