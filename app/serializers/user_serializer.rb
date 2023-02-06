class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :gender, :phone_number, :email, :age, :image, :flight_hours, :username, :full_name, :user_initials, :flight_hours_left
  has_many :flight_lessons

  def full_name
    "#{self.object.first_name} #{self.object.last_name}"
  end

  def user_initials
    "#{self.object.first_name[0]}#{self.object.last_name[0]}"
  end

  def flight_hours_left
   "#{40 - self.object.flight_hours}"
  end

end
