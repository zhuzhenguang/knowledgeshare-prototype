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

knowledgeServices.factory('KeywordQuery', ['$resource', function ($resource) {
    return $resource('data/keyword.json', {}, {
        execute: {method: 'GET', isArray: true}
    })
}]);

knowledgeServices.factory('Query', ['$resource', function ($resource) {
    return $resource('data/articles.json', {}, {
        execute: {method: 'GET', isArray: true}
    })
}]);

knowledgeServices.factory('Tag', ['$resource', function($resource) {
    return $resource('data/tags.json', {}, {
        query: {method: 'GET', isArray: true}
    });
}]);
