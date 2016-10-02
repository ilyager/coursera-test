(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      // process result and only keep items that match
        var foundItems = result.data;
        // return processed items
        return foundItems;
      });

     return response;
  };


  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    }).then(function (result) {

      // process result and only keep items that match
        var foundItems = result.data.menu_items;
        // return processed items
        return foundItems;
      });

    return response;
  };

}

})();
