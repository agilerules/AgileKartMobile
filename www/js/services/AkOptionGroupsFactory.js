angular.module('agilekartmobile').factory('AkOptionGroupsResource', function($resource){
    var resource = $resource('https://agilekart-mycooldomain.rhcloud.com/rest/akoptiongroups/:AkOptionGroupsId',{AkOptionGroupsId:'@optionGroupId'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});