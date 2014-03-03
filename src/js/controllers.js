/**
 * Created by zhenguang.zhu on 14-3-3.
 */
var knowledgeControllers = angular.module('knowledgeControllers', []);

knowledgeControllers.controller('UserController', ['$scope', 'User', function ($scope, User) {
    $scope.user = User.check();
    $scope.userRegister = function($event) {
        $('button#login_button').on('click', function (e) {
            e.preventDefault();
            $("div#login-modal").modal('show');
        });

        $('button#login_confirm').on('click', function (e) {
            e.preventDefault();
            $scope.user.login = true;
            $("div#login-modal").modal('hide');
        });
    };
    $scope.loginInit = function(e) {
        e.preventDefault();
        $("div#login-modal").modal('show');
    };
}]);
