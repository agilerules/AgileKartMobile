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

