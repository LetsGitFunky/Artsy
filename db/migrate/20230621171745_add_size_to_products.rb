class AddSizeToProducts < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :sizes, :string, array: true, default: []
  end
end
