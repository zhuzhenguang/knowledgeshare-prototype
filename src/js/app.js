/**
 * Created by zhenguang.zhu on 14-3-3.
 */
(function () {
    var knowledgeApp = angular.module('knowledgeApp', [
        'ngRoute',
        'knowledgeControllers',
        'knowledgeServices'
    ]);

    knowledgeApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/editor', {
                templateUrl: 'editor.html',
                controller: 'KnowledgeEditController'
            }).
            when('/myshare', {
                templateUrl: 'main.html',
                controller: 'MyShareController'
            }).
            when('/article', {
                templateUrl: 'article.html'
            }).
            otherwise({
                templateUrl: 'content.html',
                controller: 'MenuController'
            });
    }]);
})();