@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :price, :category
    end
end

# TODO image_urls
