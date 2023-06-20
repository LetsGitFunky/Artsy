class UpdateUsers < ActiveRecord::Migration[7.0]
  def change
    remove_index :users, :username
    rename_column :users, :username, :first_name
  end
end
