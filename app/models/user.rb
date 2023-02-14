class User < ApplicationRecord
    has_secure_password
    has_many :flight_lessons, dependent: :destroy
    has_many :aircrafts, through: :flight_lessons

    validates_presence_of :first_name, :last_name, :gender, :phone_number, :email, :age, :flight_hours, :username
    validates :username, :email, :phone_number, uniqueness: true
    validate :flight_time

    def flight_time
        if self.flight_hours < 0
            errors.add(:flight_hours, "must be greater than zero")
        end
    end
end
