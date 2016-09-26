(function () {
'use strict';

angular.module('NarrowItDownApp')
.controller('NarrowItDownController', NarrowItDownController);


NarrowItDownController.$inject = ['MenuCategoriesService'];
function NarrowItDownController(MenuCategoriesService) {
  var menu = this;
  menu.searchTerm= "";

  menu.searchText = function () {

    if (!menu.searchTerm == ""){
      var promise = MenuCategoriesService.getMatchedMenuItems(menu.searchTerm);

      promise.then(function (response) {
        menu.items = response;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    }else{
      menu.items = [];
    }

  }

  menu.removeItem = function (itemIndex) {
    menu.items.splice(itemIndex, 1);
  };

}

})();
