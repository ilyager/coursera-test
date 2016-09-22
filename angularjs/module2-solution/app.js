(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var listToBuy = this;

  listToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  listToBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}


// LIST #2 - controller
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var listAlreadyBought = this;

  listAlreadyBought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  var itemsAlreadyBought = [];
    var itemsToBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },    
    {
      name: "Bread",
      quantity: "10"
    }
  ];

  service.removeItem = function (itemIndex) {
    var quantity = itemsToBuy[itemIndex].quantity;
    var itemName = itemsToBuy[itemIndex].name;
    var item = {
       name: itemName,
       quantity: quantity
     };
    itemsAlreadyBought.push(item);
    itemsToBuy.splice(itemIndex, 1);
  };

  service.getItemsAlreadyBought = function () {
     return itemsAlreadyBought;
  };

  service.getItemsToBuy = function () {
     return itemsToBuy;
  };

}



})();
