class Review < ApplicationRecord
    belongs_to :product
    belongs_to :user

    validates :body, presence: true
    validates :title, precedence: true
    validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
end
