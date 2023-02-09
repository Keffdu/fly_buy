class Aircraft < ApplicationRecord
  belongs_to :airport
  has_one :instructor
  has_many :flight_lessons
  has_many :users, through: :flight_lessons
end
