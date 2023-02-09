class AirportsController < ApplicationController

    def index
        render json: Airport.all, status: 200
    end

    def show
        airport = Airport.find_by(id: params[:id])
        if airport
            render json: airport, status: 200
        else
            render json: { errors: ["Airport does not exist"] }, status: 404
        end
    end
end
