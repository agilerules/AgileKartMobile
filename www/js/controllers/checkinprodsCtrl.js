angular.module('agilekartmobile').controller('checkinprodsCtrl', function($scope,$stateParams,$ionicLoading,DataService,AkOptionsResource,AkProductsResource,AkProductOptionsResource,AkCategoryOptionsResource,AkProductCategoriesResource) {
$scope.cart = DataService.cart;
});
