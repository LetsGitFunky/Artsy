json.user do
  json.extract! @user, :id, :email, :first_name, :created_at, :updated_at

  json.reviews @user.reviews do |review|
    json.extract! review, :id, :title, :body, :rating, :product_id

    json.product do
      json.extract! review.product, :id, :name, :description, :price, :category, :sizes
      json.images review.product.images.map { |file| file.url }
    end
  end
end

# user show page to view reviews made on products
