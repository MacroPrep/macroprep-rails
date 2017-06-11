class Meal < ApplicationRecord
  has_and_belongs_to_many :foods
  accepts_nested_attributes_for :foods
end
