/**
 * Created by zhenguang.zhu on 14-3-3.
 */
var knowledgeServices = angular.module('knowledgeServices', ['ngResource']);

knowledgeServices.factory('User', ['$resource', function ($resource) {
    return $resource('data/user.json', {}, {
        check: {method: 'GET', isArray: false}
    });
}]);

knowledgeServices.factory('Article', ['$resource', function ($resource) {
    return $resource('data/article.json');
}]);
