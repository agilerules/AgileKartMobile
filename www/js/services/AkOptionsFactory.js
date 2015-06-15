angular.module('agilekartmobile').factory('AkOptionsResource', function($resource){
    var resource = $resource('https://agilekart-mycooldomain.rhcloud.com/rest/akoptions/:AkOptionsId',{AkOptionsId:'@optionId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});