/**
 * Created by zhenguang.zhu on 2014/4/11.
 */
/**
 * 最新分享
 */
angular.module('knowledgeControllers').controller("KnowledgeNewsController", ['$scope', '$sce', 'Query',
    function ($scope, $sce, Query) {
        $scope.articles = Query.execute({'type': 'new'});
        $scope.deliberatelyTrustDangerousSnippet = function (htmlContent) {
            return $sce.trustAs('html', htmlContent);
        };
    }
]);