json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :title, :body, :rating, :product_id, :user_id
    end
  end
end
