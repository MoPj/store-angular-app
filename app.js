
(function() {
  var app = angular.module('store', [ ]);

app.controller('StoreController', function() {
  this.products = gems;
});

var gems = [
{
  name: 'diamond',
  price: 2000.95,
  description: 'color D',
  canPurchase: true,
  soldOut: false,
  images: [
  {
    full: 'images/weddingbandsgold.jpeg',
    thumb: 'images/weddingband.jpg'
  }
  ]
},
{
  name: 'saphire',
  price: 1009.00,
  description: 'blue',
  canPurchase: true,
  soldOut: false,
    images: [
  {
    full: 'images/weddingbandsgold.jpeg',
    thumb: 'images/weddingband.jpg'
  }
  ]
}
];
})();