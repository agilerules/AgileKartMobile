
angular.module('agilekartmobile').controller('slideMenuCtrl', function($scope,AkProductCategoriesResource) {
	$scope.headerCategories=AkProductCategoriesResource.queryAll();
})

