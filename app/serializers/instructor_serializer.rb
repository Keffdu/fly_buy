class InstructorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone_number, :email, :age, :image, :flight_hours, :experience_level, :full_name
  belongs_to :aircraft

  def full_name
    "#{self.object.first_name} #{self.object.last_name}"
  end
end
