angular.module('agilekartmobile').factory('AkUsersResource', function($resource){
    var resource = $resource('http://localhost:8089/AgileKartRest/rest/akusers/:AkUsersId',{AkUsersId:'@userId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});