class MealGoalsController < ApplicationController
  def new
  end

  def create
    params['meal_goal'].each do |goal|
      current_user.meal_goals.create(
        carbs: goal['carbs'],
        fat: goal['fat'],
        protein: goal['protein']
      )
    end

    redirect_to profile_path 
  end
end
