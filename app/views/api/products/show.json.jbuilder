json.product do
  json.extract! @product, :id, :name, :description, :price, :category
end

# TODO image_urls
