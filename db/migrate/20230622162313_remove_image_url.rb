class RemoveImageUrl < ActiveRecord::Migration[7.0]
  def change
    remove_column :products, :img_urls
  end
end
