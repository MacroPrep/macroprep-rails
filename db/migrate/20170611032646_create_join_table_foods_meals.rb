class CreateJoinTableFoodsMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :foods_meals, id: false do |t|
      t.belongs_to :food
      t.belongs_to :meal
    end
  end
end
