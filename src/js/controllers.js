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
knowledgeControllers.controller("NavigatorController", ['$scope', 'KeywordQuery', 'SEARCH_MODE',
    function ($scope, KeywordQuery, SEARCH_MODE) {
        /* 搜索模式 */
        $scope.searchMode = SEARCH_MODE[1];
        $scope.switchSearch = function () {
            var nextIndex = Math.abs($scope.searchMode.id - 1);
            $scope.searchMode = SEARCH_MODE[nextIndex];
        };

        /* 日期搜索 */
        angular.element("div#date_search input").datepicker({
            format: "yyyy-mm-dd",
            language: "zh-CN",
            autoclose: true
        });

        /* 关键字搜索 */
        angular.element("#search_input").autocomplete({
            source: function (request, response) {
                KeywordQuery.execute({"keyword": request.term}, function (result) {
                    response(result);
                });
            },
            select: function (event, ui) {
                angular.element("#search_input").val(ui.item.result);
            }
        }).data("ui-autocomplete")._renderItem = function (ul, item) {
            return angular.element("<li>").append("<a>" + item.result + "</a>").appendTo(ul);
        };
    }
]);

/**
 * 搜索模式常量
 */
knowledgeControllers.constant('SEARCH_MODE', [
    {name: '简单搜索', id: 0},
    {name: '高级搜索', id: 1}
]);

/**
 * 标签控制
 */
knowledgeControllers.controller('TagController', ['$scope', 'TAG_PROP', 'Tag', function ($scope, tagProp, Tag) {
    $scope.tags = Tag.query();
    $scope.select = function (tag, $event) {
        tag.selected = !angular.element($event.currentTarget).find("input[type=checkbox]")[0].checked;
    };
    $scope.getColor = function ($index) {
        return tagProp.color[$index % 6];
    };
}]);

/**
 * 标签常量
 */
knowledgeControllers.constant('TAG_PROP', {
    color: ['default', 'primary', 'success', 'info', 'warning', 'danger']
});

/**
 * 菜单控制
 */
knowledgeControllers.controller("MenuController", ['$scope', '$rootScope', 'MENU',
    function ($scope, $rootScope, MENU) {
        $rootScope.menu = MENU;

        $rootScope.setMenu = function (id) {
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

        $scope.newTag = function () {
            angular.element('#new_tag_modal').modal();
        };

        UM.getEditor('share_editor');
    }
]);

/**
 * 新分享
 */
knowledgeControllers.controller("KnowledgeNewsController", ['$scope', '$sce', 'Query',
    function ($scope, $sce, Query) {
        $scope.articles = Query.execute({'type': 'new'});
        $scope.deliberatelyTrustDangerousSnippet = function (htmlContent) {
            return $sce.trustAs('html', htmlContent);
        };
    }
]);

