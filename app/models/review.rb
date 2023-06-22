# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :string
#  rating     :integer
#  product_id :bigint           not null
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string           not null
#
class Review < ApplicationRecord
    belongs_to :product
    belongs_to :user

    validates :body, presence: true
    validates :title, presence: true
    validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
end
