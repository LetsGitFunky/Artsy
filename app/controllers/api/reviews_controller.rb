class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @reviews = Review.where(product_id: params[:product_id])
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
        debugger

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
        params.require(:review).permit(:body, :title, :rating, :product_id, :id)
    end
end
