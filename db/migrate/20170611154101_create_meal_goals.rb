class CreateMealGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :meal_goals do |t|
      t.belongs_to :user
      t.string :name
      t.integer :carbs
      t.integer :fat
      t.integer :protein

      t.timestamps
    end
  end
end
