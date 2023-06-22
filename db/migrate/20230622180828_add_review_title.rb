class AddReviewTitle < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :title, :string, null: false
  end
end
