json.product do
  json.extract! @product, :id, :name, :description, :price, :category, :img_urls, :sizes
end

# TODO image_urls
