json.user do
  json.extract! @user, :id, :email, :first_name, :created_at, :updated_at
end

json.reviews do
  @user.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :body, :rating, :product_id, :user_id, :title
    end
  end
end

json.products do
  @user.reviewed_products.each do |product|
    json.set! product.id do
      json.extract! product, :id, :name, :description, :price, :category, :sizes
      json.image product.images[0].url
    end
  end
end

# user show page to view reviews made on products
