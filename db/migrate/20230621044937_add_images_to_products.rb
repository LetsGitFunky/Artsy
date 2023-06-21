class AddImagesToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :img_urls, :string, array: true, default: [], null: false
  end
end
