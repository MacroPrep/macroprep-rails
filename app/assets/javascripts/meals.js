var App = window.App || {};

App.NewMealForm = App.NewMealForm || {};

App.NewMealForm.currentFoodCount = 0;

App.NewMealForm.calculateMacros = function() {
  var $table = $('#new_meal'),
      $foodRows = $('#new_meal .food'),
      $totalsRow = $('#new-meal-totals'),
      totalCarbs = 0,
      totalFat = 0,
      totalProtein = 0;

  $foodRows.each(function($index, foodRow) {
    var inputs = $(foodRow).find('input');

    if($.isNumeric(inputs[1].value)) {
      totalCarbs += parseInt(inputs[1].value);
    }

    if($.isNumeric(inputs[2].value)) {
      totalFat += parseInt(inputs[2].value);
    };

    if($.isNumeric(inputs[3].value)) {
      totalProtein += parseInt(inputs[3].value);
    };
  })

  $totalsRow.html(
    `<td>Total</td><td>${totalCarbs}</td><td>${totalFat}</td><td>${totalProtein}</td><td></td>`
  )
};

App.NewMealForm.deleteFoodItem = function() {
  $currentRow = $(this).closest('.food').remove();
}

App.NewMealForm.addFoodItem = function() {
  App.NewMealForm.currentFoodCount += 1;

  var $newItem = $('<tr>', {class: 'food'}),
      $food = $('.food'),
      namePrefix = `meal[foods_attributes][${App.NewMealForm.currentFoodCount}]`,
      $foodName = $('<input>', {type: 'text', name: `${namePrefix}[name]`, class: 'w3-input'}),
      $foodCarbs =  $('<input>', {type: 'number', name: `${namePrefix}[food_carbs]`, class: 'w3-input'}),
      $foodFat =  $('<input>', {type: 'number', name: `${namePrefix}[food_fat]`, class: 'w3-input'}),
      $foodProtein =  $('<input>', {type: 'number', name: `${namePrefix}[food_protein]`, class: 'w3-input'}),
      $deleteButton = $('<span>', {class: 'remove-food-item w3-red w3-btn'});

  $deleteButton.html('-');

  $newItem.append($('<td>').append($foodName));
  $newItem.append($('<td>').append($foodCarbs));
  $newItem.append($('<td>').append($foodFat));
  $newItem.append($('<td>').append($foodProtein));
  $newItem.append($('<td>', {class: 'actions'}).append($deleteButton));

  if($food.length > 0) {
    $('.food').last().after($newItem);
  } else {
    $('tbody').after($newItem);
  }
}

App.NewMealForm.init = function() {
  App.NewMealForm.currentFoodCount = $('#new_meal .food').length;
  $(document).on('change', '#new_meal input', App.NewMealForm.calculateMacros);
  $(document).on('click', '#add-meal', App.NewMealForm.addFoodItem);
  $(document).on('click', '.remove-food-item', App.NewMealForm.deleteFoodItem);
}

$(document).ready(App.NewMealForm.init);
