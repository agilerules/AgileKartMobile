angular.module("agilekartmobile", [ "ionic","ngResource"])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {

		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});

})

.factory("DataService", function() {

  var myCart = new shoppingCart("AgileKartMobile");

  myCart.addCheckoutParameters("PayPal",
      "jaugustin@agilerulesconsultants.com");

  // enable Google Wallet checkout
  // note: the second parameter identifies the merchant; in order to use the
  // shopping cart with Google Wallet, you have to create a merchant account
  // with
  // Google. You can do that here:
  // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
  myCart.addCheckoutParameters("Google", "500640663394527", {
    ship_method_name_1 : "UPS Next Day Air",
    ship_method_price_1 : "20.00",
    ship_method_currency_1 : "USD",
    ship_method_name_2 : "UPS Ground",
    ship_method_price_2 : "15.00",
    ship_method_currency_2 : "USD"
  });

  // return data object with store and cart
  return {
    cart : myCart
  };
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "layout/menu-layout.html",
      controller: 'slideMenuCtrl'
    })

    .state('app.category', {
      url: "/category/:categoryName",
      views: {
        'menuContent' :{
          templateUrl: "views/productCategory.html",
          controller: 'categoryCtrl'
        }
      }
    })

    .state('app.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "views/pageHome.html",
          controller: 'homeCtrl'
        }
      }
    })

    .state('app.checkprods', {
      url: "/checkprods",
      views: {
        'menuContent' :{
          templateUrl: "views/checkinproduct.html",
          controller: 'checkinprodsCtrl'
        }
      }
    })

    .state('app.product', {
      url: "/product/:categoryName/:productId",
      views: {
        'menuContent' :{
          templateUrl: "views/product.html",
          controller: 'productCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

