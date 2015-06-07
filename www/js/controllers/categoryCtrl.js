
angular.module('agilekartmobile').controller('categoryCtrl', function($scope,$stateParams,$ionicLoading,AkOptionsResource,AkProductsResource,AkProductOptionsResource,AkCategoryOptionsResource,AkProductCategoriesResource) {
		var prodLocalList=[];

				// Fetches all the records from the ak_product_categories table - Fields present category_id and category_name
				$scope.productCategories = AkProductCategoriesResource.queryAll();

				// Fetches all the records from the ak_category_opotions table - Fields present category_option_id and category_id 
				//option_group_id
				$scope.optionsGroupsList = AkCategoryOptionsResource.queryAll();

				//Fetches all the records from the ak_options table - Fields present option_id, option_group_id and option_name
				$scope.optionsList=AkOptionsResource.queryAll();


				$scope.productList=AkProductsResource.queryAll();

				//Fetches the state param from the URL- Example :  T-shirts, Shoes, Watches
				$scope.stateCategory=$stateParams.categoryName;

				$scope.loadingIndicator = $ionicLoading.show({
				    content: 'Loading Data',
				    animation: 'fade-in',
				    showBackdrop: false,
				    maxWidth: 200,
				    showDelay: 500
				});

		$scope.productCategories.$promise.then(function(prodCategories){
			$scope.optionsGroupsList.$promise.then(function(catopslocal){
				$scope.optionsList.$promise.then(function(optionsLocal){
					$scope.productList.$promise.then(function(prodLocal){
						$ionicLoading.hide();
							//Fetches the corresponding category id of the category name(which is fetched from the url)
							//Example if the stateCategory is T-shirts it returns the result 1
							$scope.productCategoryId=function(){
							for(var i=0;i<prodCategories.length;i++){
								if($scope.stateCategory==prodCategories[i].categoryName){
								return prodCategories[i].categoryId;
								}
							}
							};

							//Fetches the option_group_id's for the particular category id
							$scope.categoryOptionGroupList=function(catId){
							catoptions=[];
							for(var i=0;i<catopslocal.length;i++){
								if(catId==catopslocal[i].akProductCategories.categoryId){
								 catoptions.push(catopslocal[i]);
								}
							}
								return  catoptions;
							};

							//Fetches the option_name's for the particular option group id
							$scope.optionsListForGroupID=function(groupId){
							optionLocalList=[];
							for(var i=0;i<optionsLocal.length;i++){
								if(groupId==optionsLocal[i].akOptionGroups.optionGroupId){
								 optionLocalList.push(optionsLocal[i]);
								}
							}
								return  optionLocalList;
							};

							$scope.productLocalListForGroup=function(){
							prodLocalList=[];
							for(var i=0;i<prodLocal.length;i++){
								if($scope.productCategoryId()==prodLocal[i].akProductCategories.categoryId){
								prodLocalList.push(prodLocal[i]);
								}
							}
							return  prodLocalList;
							};

					//fourth promise close - productList
					});				
				//third promise close - optionsList
				});
			//second promise close - optionsGroupsList
			});
		//first promise close - productCategories
		});
	
})

