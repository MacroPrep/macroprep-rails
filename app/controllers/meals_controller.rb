class MealsController < ApplicationController
  before_action :authenticate_user!

  def new
    @meal = current_user.meals.build
    @meal.foods = [Food.new]
  end

  def create
    @meal = current_user.meals.build(meal_params)

    if @meal.save
      redirect_to profile_path
    else
      render :new
    end
  end

  def destroy
  end

  def meal_params
    params.require(:meal).permit(
      :name,
      foods_attributes: [
        :name,
        :carbs,
        :fat,
        :protein
      ]
    )
  end
end
