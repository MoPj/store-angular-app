
(function() {
  var app = angular.module('store', [ ]);

app.controller('StoreController', function() {
  this.products = gems;
});

app.controller('PanelController', function() {
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

    this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});

app.controller('GalleryController', function(){
  this.current = 0;
  this.setCurrent = function(newGallery){
    this.current = newGallery || 0;
  };
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
  ],
  specifications: 'specs',

  reviews: [
    {
      stars: 5,
      body: " good product",
      author: "test@email.com"
    },
    {
      stars: 5,
      body: " good product",
      author: "test@email.com"
    }    
    ],
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
  ],
  specifications: 'specs',

  reviews: [
    {
      stars: 5,
      body: " good product",
      author: "test@email.com"
    },
    {
      stars: 5,
      body: " good product",
      author: "test@email.com"
    }    
    ],
},
];
})();