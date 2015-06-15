angular.module('agilekartmobile').factory('AkOrdersResource', function($resource){
    var resource = $resource('https://agilekart-mycooldomain.rhcloud.com/rest/akorders/:AkOrdersId',{AkOrdersId:'@orderId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});