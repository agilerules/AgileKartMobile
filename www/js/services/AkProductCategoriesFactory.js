angular.module('agilekartmobile').factory('AkProductCategoriesResource', function($resource){
    var resource = $resource('https://agilekart-mycooldomain.rhcloud.com/rest/akproductcategories/:AkProductCategoriesId',{AkProductCategoriesId:'@categoryId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});