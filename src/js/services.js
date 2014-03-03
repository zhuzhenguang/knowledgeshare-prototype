/**
 * Created by zhenguang.zhu on 14-3-3.
 */
var knowledgeService = angular.module('knowledgeService', ['ngResource']);

knowledgeService.factory('User', ['$resource', function($resource) {
    return $resource('data/user.json', {}, {
        check: {method: 'GET', isArray: false}
    });
}]);
