(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.getLunchCheck= function () {
    var lunchMenu = $scope.lunchMenu ;
    var message = "Please enter data first";

    if (lunchMenu != null) {
      if (lunchMenu.trim() != "") {
        var countDishes= lunchMenu.indexOf(',');
        message = (countDishes <= 3) ? "Enjoy!":"Too much!";
      }
    }
   $scope.message = message;
  };

}

})();
