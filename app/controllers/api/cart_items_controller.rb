class Api::CartItemsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @cart_items = CartItem.all
    render :index
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    @cart_item.user_id = current_user.id

    if @cart_item.save
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def update
    @cart_item = current_user.cart_items.find(params[:id])
    
    if @cart_item.update(cart_item_params)
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy
    @cart_item = current_user.cart_items.find(params[:id])
    @cart_item.destroy
    render :show
  end

  private

  def cart_item_params
      params.require(:cart_item).permit(:quantity, :options, :product_id)
  end
end
