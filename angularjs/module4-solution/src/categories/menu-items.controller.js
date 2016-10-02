(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);


MenuItemsController.$inject = ['$stateParams','items'];
function MenuItemsController($stateParams, items) {
  var itemList  = this;
  itemList.items = items;
}

})();
