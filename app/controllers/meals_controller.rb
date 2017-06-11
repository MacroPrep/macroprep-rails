class MealsController < ApplicationController
  def new
    @meal = Meal.new
    @meal.foods = [Food.new]
  end

  def create
    @meal = Meal.new(params)

    if @meal.valid?
      redirect_to profile_path
    else
      render :new
    end
  end

  def destroy
  end
end
