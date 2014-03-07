/**
 * Created by zhenguang.zhu on 14-3-3.
 */
(function () {
    var knowledgeApp = angular.module('knowledgeApp', [
        'ngRoute',
        'knowledgeControllers',
        'knowledgeService'
    ]);

    knowledgeApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/editor', {
                templateUrl: 'editor.html',
                controller: 'KnowledgeEditController'
            }).
            when('/myshare', {
                templateUrl: 'myshare.html',
                controller: 'MyShareController'
            }).
            when('/article', {
                templateUrl: 'article.html'
            }).
            otherwise({
                templateUrl: 'news.html'
            });
    }]);
})();