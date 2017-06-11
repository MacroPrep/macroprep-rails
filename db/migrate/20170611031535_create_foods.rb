class CreateFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :carbs
      t.integer :fat
      t.integer :protein

      t.timestamps
    end
  end
end
