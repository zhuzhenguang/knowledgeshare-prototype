/**
 * Created by zhenguang.zhu on 2014/4/11.
 */
/**
 * 用户控制
 */
angular.module('knowledgeControllers').controller('UserController', ['$scope', 'User', function ($scope, User) {
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
    $scope.loginInit = function ($event) {
        $event.preventDefault();
        angular.element('div#login-modal').modal('show');
    };

    /**
     * 登录操作
     *
     * @param $event
     */
    $scope.login = function ($event) {
        $event.preventDefault();
        $scope.user.login = true;
        angular.element('div#login-modal').modal('hide');
    };

    /**
     * 登出操作
     *
     * @param $event
     */
    $scope.logout = function ($event) {
        $event.preventDefault();
        $scope.user.login = false;
    };

    /**
     * 强迫先登录再操作
     *
     * @param $event
     */
    $scope.forceLogin = function($event) {
        if (!$scope.user.login) {
            $scope.loginInit($event);
            return false;
        }
        return true;
    };
}]);