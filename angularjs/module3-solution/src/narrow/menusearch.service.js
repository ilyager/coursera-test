(function () {
'use strict';

angular.module('NarrowItDownApp')
.service('MenuCategoriesService', MenuCategoriesService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuCategoriesService.$inject = ['$http', 'ApiBasePath']
function MenuCategoriesService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {
      // process result and only keep items that match
        function containsFilter(value) {
          return value.name.indexOf(searchTerm) !== -1;
        }
        var foundItems = result.data.filter(containsFilter);
        // return processed items
        return foundItems;
      });
      return response;
    };
}

})();
