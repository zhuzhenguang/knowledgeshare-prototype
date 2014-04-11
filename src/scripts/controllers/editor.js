/**
 * Created by zhenguang.zhu on 2014/4/11.
 */
/**
 * 编辑功能
 */
angular.module('knowledgeControllers').controller("KnowledgeEditController", [
    '$scope',
    '$rootScope',
    '$location',
    'Article',
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

        $scope.article = {
            category: 'none'
        };

        UM.getEditor('share_editor');
    }
]);