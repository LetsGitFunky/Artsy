# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  quantity   :integer          not null
#  options    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    belongs_to :user
    belongs_to :product

    validates :quantity, :options, :product_id, :user_id, presence: true
    validates :quantity, numericality: { only_integer: true, greater_than: 0 }

end
