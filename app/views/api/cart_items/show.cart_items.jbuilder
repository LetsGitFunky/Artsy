json.cart_item do
    json.extract! @cart_item, :quanitiy, :options, :user_id, :product_id, :id
end
