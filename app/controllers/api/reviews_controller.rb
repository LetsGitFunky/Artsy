class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    # def index
    #     @reviews = Review.where(product_id: params[:product_id])
    #     render :index
    # end

    def index # updated index for UserProfile
        if params[:product_id]
            @reviews = Review.where(product_id: params[:product_id])
        elsif params[:user_id]
            @reviews = Review.where(user_id: params[:user_id])
        end
        render :index
    end


    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = current_user.reviews.find(params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find(params[:id])
        @review.destroy
        render :show
    end

    private

    def review_params
        params.require(:review).permit(:body, :title, :rating, :product_id)
    end
end
