class AircraftsController < ApplicationController

    def show
        aircraft = Aircraft.find_by(id: params[:id])
        if aircraft
            render json: aircraft, status: 200
        else
            render json: { errors: ["Aircraft does not exist"] }, status: 404
        end
    end
end
