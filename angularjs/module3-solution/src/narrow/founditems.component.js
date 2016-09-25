(function () {
'use strict';

angular.module('NarrowItDownApp')
.component('foundItems', {
  templateUrl: 'src/narrow/founditems.template.html',
  controller: FoundItemsComponentController,
  bindings: {
    items: '<',
    onRemove: '&'
  }
});

FoundItemsComponentController.$inject = ['$rootScope', '$element', '$q']
function FoundItemsComponentController($rootScope, $element, $q) {
  var $ctrl = this;
  var totalItems;

  $ctrl.$onInit = function () {
    totalItems = 0;
  };

  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex });
  };
}

})();
