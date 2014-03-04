/**
 * Created by zhenguang.zhu on 14-3-3.
 */
var knowledgeControllers = angular.module('knowledgeControllers', []);

knowledgeControllers.controller('UserController', ['$scope', 'User', function ($scope, User) {
    /**
     * 检查是否登录
     *
     * @type {*}
     */
    $scope.user = User.check();

    /**
     * 登录初始化
     *
     * @param $event
     */
    $scope.loginInit = function($event) {
        $event.preventDefault();
        $("div#login-modal").modal('show');
    };

    /**
     * 登录操作
     *
     * @param $event
     */
    $scope.login = function($event) {
        $event.preventDefault();
        $scope.user.login = true;
        $("div#login-modal").modal('hide');
    };

    /**
     * 登出操作
     *
     * @param $event
     */
    $scope.logout = function($event) {
        $event.preventDefault();
        $scope.user.login = false;
    };
}]);

knowledgeControllers.controller("NavigatorController", ['$scope', function($scope) {
    $('#datepicker').datepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        autoclose: true
    });
}]);
