class FlightLessonSerializer < ActiveModel::Serializer
  attributes :id, :date, :airport, :start_time, :end_time, :notes, :completed
  has_one :user
  has_one :aircraft


end
