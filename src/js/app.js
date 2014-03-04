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
            when('/', {templateUrl: '/main.html'}).
            otherwise({
                templateUrl: '/main.html'
            });
    }]);
})();