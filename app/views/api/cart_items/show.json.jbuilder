json.cart_item do
    json.extract! @cart_item, :id, :quantity, :options, :user_id, :product_id
    product = @cart_item.product
    json.product_name product.name
    json.product_price product.price
    json.product_image url_for(product.images.first)
end
