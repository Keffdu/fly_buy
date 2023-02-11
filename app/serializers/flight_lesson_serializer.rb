class FlightLessonSerializer < ActiveModel::Serializer
  attributes :id, :date, :airport, :start_time, :end_time, :notes, :completed, :fl_aircraft, :fl_instructor, :fl_hourly
  belongs_to :aircraft


  def fl_aircraft
    "#{self.object.aircraft.model}"
  end

  def fl_instructor
    "#{self.object.aircraft.instructor.first_name} #{self.object.aircraft.instructor.last_name}"
  end

  def fl_hourly
    "#{self.object.aircraft.hourly_rate}"
  end

end
