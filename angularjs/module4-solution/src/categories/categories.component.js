(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/categories/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
