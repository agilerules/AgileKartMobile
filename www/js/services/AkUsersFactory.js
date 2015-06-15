angular.module('agilekartmobile').factory('AkUsersResource', function($resource){
    var resource = $resource('https://agilekart-mycooldomain.rhcloud.com/rest/akusers/:AkUsersId',{AkUsersId:'@userId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});