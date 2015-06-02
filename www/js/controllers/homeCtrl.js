angular.module('agilekartmobile').controller('homeCtrl', function($scope, $ionicPopover,AkProductsResource) {
	  $scope.blockData=AkProductsResource.queryAll();
	  $scope.blockData.$promise.then(function(proList){
	  $scope.productsList=proList;	
	  });
	  $scope.myActiveSlide = 1;
	  
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
	});
	  