class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        #   debugger
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: 201
        else
          render json: { errors: ["Invalid username or password"]}, status: 401
        end
    end

    def destroy
        return render json: { errors: ["Unauthorized user"] }, status: 401 unless session.include? :user_id
        session.delete :user_id
        head :no_content
    end
end
