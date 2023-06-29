class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def search
    query = params[:query]
    @products = Product.where('name ILIKE ? OR description ILIKE ? OR category ILIKE ?', "%#{query}%", "%#{query}%", "%#{query}%")
    render :index
  end
end
