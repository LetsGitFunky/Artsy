# @reviews.each do |review|
#   json.set! review.id do
#     json.extract! review, :title, :body, :rating, :product_id, :user_id
#     json.id review.id
#   end
# end

# json.array! @reviews do |review|
#   json.id review.id
#   json.title review.title
#   json.body review.body
#   json.rating review.rating
#   json.product_id review.product_id
#   json.user_id review.user_id
# end

@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :title, :body, :rating, :product_id, :user_id
  end
end
