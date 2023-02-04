class Airport < ApplicationRecord
    has_many :aircrafts
    has_many :instructors, through: :aircrafts
end
