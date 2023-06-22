@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :description, :price, :category, :sizes
        json.images product.images.map { |file| file.url }
    end
end
