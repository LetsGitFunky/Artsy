@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :quantity, :options, :product_id, :user_id
    end
end
