angular.module('agilekartmobile').factory('AkCategoryOptionsResource', function($resource){
    var resource = $resource('https://agilekart-mycooldomain.rhcloud.com/rest/akcategoryoptions/:AkCategoryOptionsId',{AkCategoryOptionsId:'@categoryOptionId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});