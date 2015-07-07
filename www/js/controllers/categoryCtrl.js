
angular.module('agilekartmobile').controller('categoryCtrl', function($scope,$http,$stateParams,$ionicLoading,AkOptionsResource,AkProductsResource,AkProductOptionsResource,AkCategoryOptionsResource,AkProductCategoriesResource) {
		var prodLocalList=[];
		var proOptions=[];
		var productGrpList =[];
		var products=[];
		var prodLocal=[];
		var productsIds=[];
		var optionsLocal=[];
		var prodCategories=[];
		var a=0;
			$scope.optionGrpset = [];
			$scope.isLoading1 = true;
				// Fetches all the records from the ak_product_categories table - Fields present category_id and category_name
				$scope.productCategories = AkProductCategoriesResource.queryAll();

				// Fetches all the records from the ak_category_opotions table - Fields present category_option_id and category_id 
				//option_group_id
				$scope.optionsGroupsList = AkCategoryOptionsResource.queryAll();

				//Fetches all the records from the ak_options table - Fields present option_id, option_group_id and option_name
				$scope.optionsList=AkOptionsResource.queryAll();

                $scope.productOptions=AkProductOptionsResource.queryAll();
				$scope.productsList=AkProductsResource.queryAll();

				//Fetches the state param from the URL- Example :  T-shirts, Shoes, Watches
				$scope.stateCategory=$stateParams.categoryName;
                var routeCatValue=$scope.stateCategory;
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
					$scope.productsList.$promise.then(function(prodLocal){
					$scope.productOptions.$promise.then(function(proOptions){
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
                            $http.get("json/category_css.json").success(function(data){
				            $scope.csspopular=data;
			                });
							$scope.productLocalListForGroup=function(){
							prodLocalList=[];
							for(var i=0;i<prodLocal.length;i++){
								if($scope.productCategoryId()==prodLocal[i].akProductCategories.categoryId){
								prodLocalList.push(prodLocal[i]);
								}
							}
							return  prodLocalList;
							};
			$scope.removeOptionGrpset = function(groupId,optionId){
				for(var i=0;i<$scope.optionGrpset.length;i++){
					if(groupId==$scope.optionGrpset[i].group&&optionId==$scope.optionGrpset[i].option){
						$scope.optionGrpset.splice(i, 1);
						break;
					}
				}
			};
			$scope.productIdList=function(groupId,optionId,flag){
				if(flag){
					$scope.optionGrpset.push({group:groupId,option:optionId});
				}else{
					$scope.removeOptionGrpset(groupId,optionId);
				}
				$scope.sortOptionGrpset=_.groupBy($scope.optionGrpset,"group");
				productGrpList =[];
				for(var key in $scope.sortOptionGrpset) {
				    var value = $scope.sortOptionGrpset[key];
				    var product = [];
				   for(var j=0;j<value.length;j++){
					   console.log(value[j].group+"   "+value[j].option);
					   for(var i=0;i<proOptions.length;i++){
							if(value[j].group==proOptions[i].akOptionGroups.optionGroupId && value[j].option==proOptions[i].akOptions.optionId){
								console.log("Option id is" +proOptions[i].productOptionId);
								product.push(proOptions[i].akProducts.productId);
							}
						}
				   }
				   productGrpList.push(product);
				}
				console.log(productGrpList);
				productsIds = _.intersection.apply(_, productGrpList);
				console.log("Result"+_.intersection.apply(_, productGrpList));
				
			};
			$scope.productList=function(){
				products = [];
				console.log("Inside productList method");
				if($scope.optionGrpset==='undefined'||$scope.optionGrpset.length===0){
					console.log("Inside if method");
					productsIds = [];
					for(var i=0;i<prodLocal.length;i++){
						productsIds.push(prodLocal[i].productId);
					}
					console.log("The products ids are : "+productsIds);
				}
				for(var i=0;i<productsIds.length;i++){
						for(var j=0;j<prodLocal.length;j++){
							if(prodLocal[j].akProductCategories.categoryName==routeCatValue){
								$scope.routeCategoryId = prodLocal[j].akProductCategories.categoryId;
							if(prodLocal[j].productId==productsIds[i]){
								if(products.length==0){
									products.push(prodLocal[j]);
								}
								else {
									a=0;
									for(var k=0;k<products.length;k++){
										if(products[k].productId!=prodLocal[j].productId){
											a++;
										}
									}
									if(products.length==a){
										products.push(prodLocal[j]);
									}
								}
								
							}
						}
						}
					
					
				}			
				$scope.noOfProducts=products.length;
				console.log("Length :"+$scope.noOfProducts);
				$scope.isLoading1 = false;
				return products;
			};
                });
					//fourth promise close - productList
					});				
				//third promise close - optionsList
				});
			//second promise close - optionsGroupsList
			});
		//first promise close - productCategories
		});
	
})

