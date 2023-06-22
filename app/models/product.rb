# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  price       :float            not null
#  category    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  sizes       :string           default([]), is an Array
#
class Product < ApplicationRecord
    has_many :reviews
    
end
