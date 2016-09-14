(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.getLunchCheck= function () {
    var message = [
        "Please enter data first",
        "Enjoy!" ,
        "Too much!"
    ];
    $scope.message = message[getCountDishes()];
  };

  var getCountDishes= function () {
    var countDishes = 0;
    var lunchMenu   = $scope.lunchMenu;

    if (lunchMenu != undefined) {
      var dishes = lunchMenu.split(',');
      for (var key in dishes) {
          if (dishes[key].trim() != "") countDishes ++;
      }
    }

    switch (true) {
      case countDishes > 0 && countDishes <= 3:
        countDishes = 1;
        break;
      case countDishes > 3:
        countDishes = 2;
        break;
    }

    return countDishes;
  };

}

})();
