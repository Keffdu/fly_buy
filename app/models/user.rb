class User < ApplicationRecord
    has_secure_password
    has_many :flight_lessons
    has_many :aircrafts, through: :flight_lessons

    validates_presence_of :first_name, :last_name, :gender, :phone_number, :email, :age, :flight_hours
    validates :username, :email, :phone_number, uniqueness: true
    validates :flight_hours, :age, numericality: true


end
