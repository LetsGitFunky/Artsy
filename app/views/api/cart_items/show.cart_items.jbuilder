json.cart_item do
    json.extract! @cart_item, :quantity, :options, :user_id, :product_id, :id
end
