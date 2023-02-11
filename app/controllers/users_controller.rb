class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :user_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
    
    def create
        user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: 201
    end

    def show
        return render json: { error: "Not authorized" }, status: 401 unless session.include? :user_id
        user = User.find(session[:user_id])
        render json: user, status: 200
    end

    def update
        user = User.find(params[:id])
            user.update!(user_params)
            render json: user, status: 202
    end

    private

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :gender, :phone_number, :email, :age, :image, :flight_hours)
    end

    def user_invalid invalid
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end

    def user_not_found
        render json: { errors: "User not found." }, status: 404
    end
end
