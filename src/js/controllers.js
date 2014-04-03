/**
 * Controllers模块
 *
 * Created by zhenguang.zhu on 14-3-3.
 */
var knowledgeControllers = angular.module('knowledgeControllers', []);

/**
 * 用户控制
 */
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
}]);

/**
 * 导航控制
 */
knowledgeControllers.controller("NavigatorController", function () {
    angular.element('#datepicker').datepicker({
        format: "yyyy-mm-dd",
        language: "zh-CN",
        autoclose: true
    });
});

/**
 * 菜单控制
 */
knowledgeControllers.controller("MenuController", ['$scope', '$rootScope', 'MENU',
    function ($scope, $rootScope, MENU) {
        $rootScope.menu = MENU;

        $rootScope.setMenu = function(id) {
            angular.forEach($rootScope.menu, function (value, key) {
                $rootScope.menu[key].status = '';
            });
            $rootScope.menu[id].status = 'active';
        };

        $scope.switchMenu = function ($event) {
            var id = $event.currentTarget.id || "home_menu";
            $rootScope.setMenu(id);
        };
    }
]);

/**
 * 菜单常量
 */
knowledgeControllers.constant('MENU', {
    "home_menu": {status: 'active'},
    "edit_menu": {status: ''},
    "myshare_menu": {status: ''}
});

/**
 * 编辑功能
 */
knowledgeControllers.controller("KnowledgeEditController", ['$scope', '$rootScope', '$location', 'Article',
    function ($scope, $rootScope, $location, Article) {
        $scope.save = function () {
            Article.get(function () {
                $location.path('/article');
                $rootScope.setMenu("myshare_menu");
            });
        };

        UM.getEditor('share_editor');
    }
]);

