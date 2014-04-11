/**
 * Created by zhenguang.zhu on 14-3-3.
 */
var knowledgeApp = angular.module('knowledgeApp', [
    'ngRoute',
    'knowledgeControllers',
    'knowledgeServices'
]);

knowledgeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/editor', {
            templateUrl: 'views/editor.html',
            controller: 'KnowledgeEditController'
        }).
        when('/myshare', {
            templateUrl: 'views/myshare.html'
        }).
        when('/article', {
            templateUrl: 'views/article.html'
        }).
        otherwise({
            templateUrl: 'views/main.html',
            controller: 'MenuController'
        });
}]);

angular.module('knowledgeControllers', []);

