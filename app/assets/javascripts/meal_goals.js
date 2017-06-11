// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var App = window.App || {};
App.MealGoals = App.MealGoals || {};
App.MealGoals.totals = {
  protein: 0,
  fat: 0,
  carbs: 0
}

App.MealGoals.updateGoalTotals = function() {
  var carbGoal = parseInt($('#carb-base-goal').val()) || 0,
      fatGoal = parseInt($('#fat-base-goal').val()) || 0,
      proteinGoal = parseInt($('#protein-base-goal').val()) || 0;

  // $('.carb-input').attr('max', carbGoal);
  // $('.fat-input').attr('max', fatGoal);
  // $('.protein-input').attr('max', proteinGoal);

  App.MealGoals.calculateRemainingMacros();
}

App.MealGoals.calculateRemainingMacros = function() {
  App.MealGoals.calculateCurrentMacroUsage();

  var carbGoal = parseInt($('#carb-base-goal').val()) || 0,
      fatGoal = parseInt($('#fat-base-goal').val()) || 0,
      proteinGoal = parseInt($('#protein-base-goal').val()) || 0;

  $('#remaining-macros').html(
    `Carbs: ${carbGoal - App.MealGoals.totals.carbTotal} Fat: ${fatGoal - App.MealGoals.totals.fatTotal} Protein: ${proteinGoal - App.MealGoals.totals.proteinTotal}`
  );
}

App.MealGoals.addMealGoal = function() {
  var $newMealGoal = $('<div>', {class: 'meal-goal'});
      $newMealCarbs = $('<label>'),
      $newMealFat = $('<label>')
      $newMealProtein = $('<label>');

  $newMealGoal.append($('<h3>', {html: `Meal ${$('.meal-goal').length + 1}`}));

  $newMealCarbs.html('Carbs ');
  $newMealCarbs.append(
    '<input class="carb-input" name="meal_goal[][carbs]" type="range" min="0" maximum="100" value="0"/> '
  )
  $newMealCarbs.append('<span>0</span> ');
  $newMealGoal.append($newMealCarbs);

  $newMealFat.html(' Fat ');
  $newMealFat.append(
    '<input class="fat-input" name="meal_goal[][fat]" type="range" min="0" maximum="100" value="0"/> '
  )
  $newMealFat.append('<span>0</span> ');
  $newMealGoal.append($newMealFat);

  $newMealProtein.html(' Protein ');
  $newMealProtein.append(
    '<input class="protein-input" name="meal_goal[][protein]" type="range" min="0" maximum="100" value="0"/> '
  )
  $newMealProtein.append('<span>0</span>');
  $newMealGoal.append($newMealProtein);

  $newMealGoal.append(` <button type="button" class="delete-meal-goal w3-btn w3-red">Delete</button>`)

  $('.meal-goal').last().after($newMealGoal);
}

App.MealGoals.deleteMealGoal = function() {
  $(this).parent('.meal-goal').remove();
}

App.MealGoals.calculateCurrentMacroUsage = function() {
  var carbTotal = 0,
      fatTotal = 0,
      proteinTotal = 0;

  $('.carb-input').each(function(index, input) {
    carbTotal += parseInt(input.value);
  });

  $('.fat-input').each(function(index, input) {
    fatTotal += parseInt(input.value);
  });

  $('.protein-input').each(function(index, input) {
    proteinTotal += parseInt(input.value);
  });

  App.MealGoals.totals.carbTotal = carbTotal;
  App.MealGoals.totals.fatTotal = fatTotal;
  App.MealGoals.totals.proteinTotal = proteinTotal;
}

App.MealGoals.adjustSlider = function() {
  App.MealGoals.calculateRemainingMacros();

  var $this = $(this);
  $this.closest('label').find('span').html($this.val());
}

App.MealGoals.init = function() {
  $(document).on('change', 'input[type="range"]', App.MealGoals.adjustSlider);
  $(document).on('change', '.macronutrient-base-goals input', App.MealGoals.updateGoalTotals);
  $(document).on('click', '#create-meal', App.MealGoals.addMealGoal);
  $(document).on('click', '.delete-meal-goal', App.MealGoals.deleteMealGoal);
};

$(document).ready(App.MealGoals.init);
