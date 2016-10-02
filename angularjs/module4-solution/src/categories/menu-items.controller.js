(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['$stateParams','MenuDataService','items'];
function MenuItemsController($stateParams, MenuDataService, items) {
  var itemList  = this;
  itemList.items = items;
}

})();
