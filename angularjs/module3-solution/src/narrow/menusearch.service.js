(function () {
'use strict';

angular.module('NarrowItDownApp')
.service('MenuCategoriesService', MenuCategoriesService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuCategoriesService.$inject = ['$http', 'ApiBasePath']
function MenuCategoriesService($http, ApiBasePath) {
  var service = this;

  var items = [];

  service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    console.log(response);
    return response;
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

}

})();
