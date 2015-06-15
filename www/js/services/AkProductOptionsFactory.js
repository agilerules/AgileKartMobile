angular.module('agilekartmobile').factory('AkProductOptionsResource', function($resource){
    var resource = $resource('https://agilekart-mycooldomain.rhcloud.com/rest/akproductoptions/:AkProductOptionsId',{AkProductOptionsId:'@productOptionId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});