class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password', "firstName"]

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)

      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def show
    @user = User.find(params[:id])

    # debugger
    render :show
  end



  private

  def user_params
    params.require(:user).permit(:email, :first_name, :password)
  end

end
