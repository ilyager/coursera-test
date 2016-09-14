(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.getLunchCheck= function () {
    var message = "Please enter data first";
    var lunchMenu = $scope.lunchMenu;
        lunchMenu = (lunchMenu === undefined) ? "" : lunchMenu.trim();

    if (lunchMenu != "") {
        var countDishes= (lunchMenu.split(',').length - 1);
        message = (countDishes <= 3) ? "Enjoy!" : "Too much!";
    }

   $scope.message = message;
  };

}

})();
