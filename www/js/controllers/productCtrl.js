/**
 * 
 */
angular.module('agilekartmobile').controller('productCtrl', function($scope, $stateParams,$ionicLoading,$ionicPopover,AkProductsResource,DataService) {
	 

	 $scope.category=$stateParams.categoryName;
	$scope.prodId=$stateParams.productId;

	  $scope.loadingIndicator = $ionicLoading.show({
				    content: 'Loading Data',
				    animation: 'fade-in',
				    showBackdrop: false,
				    maxWidth: 200,
				    showDelay: 500
				});
	$scope.productList=AkProductsResource.queryAll();

	$scope.productList.$promise.then(function(prodlocal){
		$ionicLoading.hide();
	$scope.product=function($scope){
		for(var i=0;i<prodlocal.length;i++){
			if(prodlocal[i].productId==$stateParams.productId){
				return prodlocal[i];
			}
		}
	};
});
	$scope.cart = DataService.cart;
	 $ionicPopover.fromTemplateUrl('template/agilePopOver.html', {
		    scope: $scope
		  }).then(function(popover) {
		    $scope.popover = popover;
		  });
	 
		  $scope.openPopover = function($event) {
		    $scope.popover.show($event);
		  };
		  $scope.closePopover = function() {
		    $scope.popover.hide();
		  };
		  //Cleanup the popover when we're done with it!
		  $scope.$on('$destroy', function() {
		    $scope.popover.remove();
		  });
		  // Execute action on hide popover
		  $scope.$on('popover.hidden', function() {
		    // Execute action
		  });
		  // Execute action on remove popover
		  $scope.$on('popover.removed', function() {
		    // Execute action
		  });
})