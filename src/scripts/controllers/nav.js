/**
 * Created by zhenguang.zhu on 2014/4/11.
 */
/**
 * 导航控制
 */
angular.module('knowledgeControllers').controller("SearchController", ['$scope', 'KeywordQuery', 'SEARCH_MODE',
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
])

/**
 * 搜索模式常量
 */
.constant('SEARCH_MODE', [
    {name: '简单搜索', id: 0},
    {name: '高级搜索', id: 1}
])

/**
 * 标签控制
 */
.controller('TagController', ['$scope', 'TAG_PROP', 'Tag', function ($scope, tagProp, Tag) {
    $scope.tags = Tag.query();
    $scope.select = function (tag, $event) {
        tag.selected = !angular.element($event.currentTarget).find("input[type=checkbox]")[0].checked;
    };
    $scope.getColor = function ($index) {
        return tagProp.color[$index % 6];
    };
}])

/**
 * 标签常量
 */
.constant('TAG_PROP', {color: ['default', 'primary', 'success', 'info', 'warning', 'danger']})

/**
 * 目录控制
 */
.controller('CategoryController', ['$scope', 'Category', function ($scope, Category) {
    $scope.categories = Category.query();
}]);