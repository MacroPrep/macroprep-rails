class CreateJoinTableMealFood < ActiveRecord::Migration[5.1]
  def change
    create_table :meals_foods, id: false do |t|
      t.belongs_to :meal
      t.belongs_to :food
    end
  end
end
