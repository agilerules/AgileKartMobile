angular.module('agilekartmobile').factory('AkOrderDetailsResource', function($resource){
    var resource = $resource('https://agilekart-mycooldomain.rhcloud.com/rest/akorderdetails/:AkOrderDetailsId',{AkOrderDetailsId:'@detailId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});