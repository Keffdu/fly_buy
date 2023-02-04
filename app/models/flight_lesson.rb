class FlightLesson < ApplicationRecord
  belongs_to :user
  belongs_to :aircraft

  validates_presence_of :date, :airport, :start_time, :end_time
  validates :start_time, :end_time, inclusion: { in: 8..20}
  validate :flight_end_time


  def flight_end_time
    if start_time.to_i > end_time.to_i
      errors.add(:end_time, "End time must be later than start time.")
    end
  end
end
