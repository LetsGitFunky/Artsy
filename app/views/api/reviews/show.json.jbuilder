json.review do
  json.extract! @review, :title, :body, :rating, :user_id, :product_id
end
