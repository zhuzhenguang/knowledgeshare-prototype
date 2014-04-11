/**
 * Created by zhenguang.zhu on 2014/4/11.
 */
/**
 * 菜单控制
 */
angular.module('knowledgeControllers').controller("MenuController", ['$scope', '$rootScope', 'MENU',
    function ($scope, $rootScope, MENU) {
        $rootScope.menu = MENU;

        $rootScope.setMenu = function (id) {
            angular.forEach($rootScope.menu, function (value, key) {
                $rootScope.menu[key].status = '';
            });
            $rootScope.menu[id].status = 'active';
        };

        $scope.switchMenu = function ($event, needCheckUser) {
            if (needCheckUser && !$scope.forceLogin($event)) {
                return;
            }
            var id = $event.currentTarget.id || "home_menu";
            $rootScope.setMenu(id);
        };
    }
]).

/**
 * 菜单常量
 */
constant('MENU', {
    "home_menu": {status: 'active'},
    "edit_menu": {status: ''},
    "myshare_menu": {status: ''}
});