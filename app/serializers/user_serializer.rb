class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :gender, :phone_number, :email, :age, :image, :flight_hours, :username, :full_name

  def full_name
    "#{self.object.first_name} #{self.object.last_name}"
  end
end
