(function () {
'use strict';

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);


NarrowItDownController.$inject = ['MenuCategoriesService'];
function NarrowItDownController(MenuCategoriesService) {
  var menu = this;
  menu.searchTerm= "";

  menu.searchText = function () {
    var promise = MenuCategoriesService.getMatchedMenuItems();

    promise.then(function (response) {
      var searchValue = "Chicken";
      function containsFilter(value) {
        return value.name.indexOf(menu.searchTerm) !== -1;
      }
      var foundItems = response.data.filter(containsFilter);

      menu.items = foundItems;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }

  menu.removeItem = function (itemIndex) {
    menu.items.splice(itemIndex, 1);
  };

}

})();
