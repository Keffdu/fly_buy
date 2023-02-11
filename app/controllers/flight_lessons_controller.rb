class FlightLessonsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_lesson

    def index
        render json: FlightLesson.all, status: 200
    end

    def show
        flight_lesson = FlightLesson.find(params[:id])
        render json: flight_lesson, status: 200
    end

    def create
        flight_lesson = FlightLesson.new(flight_lesson_params)
        if flight_lesson.valid?
            flight_lesson.save
            render json: flight_lesson, status: 201
        else
            render json: { errors: flight_lesson.errors.full_messages }, status: 422
        end
    end

    def update
        flight_lesson = FlightLesson.find(params[:id])
            flight_lesson.update!(flight_lesson_params)
            render json: flight_lesson, status: 202
    end

    def destroy
        flight = FlightLesson.find(params[:id])
            flight.destroy
            head :no_content
    end


    private

    def flight_lesson_params
        params.permit(:date, :start_time, :end_time, :airport, :user_id, :aircraft_id, :completed)
    end

    def not_found
        render json: { errors: ["Flight not found"] }, status: 404
    end

    def invalid_lesson invalid
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
end
