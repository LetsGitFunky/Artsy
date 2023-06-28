# @cart_items.each do |cart_item|
#     json.set! cart_item.id do
#         json.extract! cart_item, :id, :quantity, :options, :product_id, :user_id
#     end
# end

# @cart_items.each do |cart_item|
#     json.set! cart_item.id do
#         json.extract! cart_item, :id, :quantity, :options, :product_id, :user_id
#         product = cart_item.product
#         json.set! :product do
#             json.title product.title
#             json.image product.image
#             json.price product.price
#         end
#     end
# end

@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :quantity, :options, :user_id, :product_id
        product = cart_item.product
        json.product_name product.name
        json.product_price product.price
        json.product_image url_for(product.images.first)
    end
end
