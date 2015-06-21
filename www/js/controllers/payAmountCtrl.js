angular.module("agilekartmobile").controller('payAmountCtrl', function($scope,DataService){
	$scope.cart=DataService.cart;
	
})