json.product do
  json.extract! @product, :id, :name, :description, :price, :category, :sizes
  json.images @product.images.map { |file| file.url }
end

json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :title, :body, :user_id, :product_id, :rating, :id
      json.author review.user.first_name
    end
  end
end

# json.reviews do
#   @product.reviews.each do |review|
#     json.set! review.id do
#       json.merge! review.attributes
#       json.author review.user.first_name
#     end
#   end
# end
