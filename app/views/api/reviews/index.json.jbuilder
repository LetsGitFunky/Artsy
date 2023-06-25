@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :title, :body, :rating, :product_id, :user_id
    json.product do
      json.extract! review.product, :id, :name, :description, :price, :category, :sizes
      json.images review.product.images.map { |file| file.url }
    end
  end
end
