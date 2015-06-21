angular.module('agilekartmobile').controller('placeOrderCtrl', function($scope,$stateParams,$ionicLoading,DataService){
	$scope.cart=DataService.cart;
})