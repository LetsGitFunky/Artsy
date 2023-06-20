class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.float :price, null: false
      t.string :category, null: false

      t.timestamps
    end
  end
end
