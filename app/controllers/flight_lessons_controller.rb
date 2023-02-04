class FlightLessonsController < ApplicationController


    def index
        render json: FlightLesson.all, status: 200
    end
end
