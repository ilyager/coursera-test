(function () {
'use strict';

angular.module('MenuApp')
.component('menuItemsList', {
  templateUrl: 'src/categories/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
