class Aircraft < ApplicationRecord
  belongs_to :airport
  has_many :instructors
  has_many :flight_lessons
  has_many :users, through: :flight_lessons
end
