class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :user_invalid
    
    def create
        user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: 201
    end

    def show
        return render json: { error: "Not authorized" }, status: 401 unless session.include? :user_id
        user = User.find_by(id: session[:user_id])
        render json: user, status: 200
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def user_invalid invalid
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
end
