
(function (angular){


        var WebAppMaker = angular.module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)


    function WidgetListController($routeParams, WidgetService, $sce) {
        var vm = this;
        vm.pageId = parseInt($routeParams.pid);
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm. widgetId = parseInt($routeParams.wgid);
        vm.checkSafeHtml = checkSafeHtml;
        vm.checkSafeYouTubeUrl = checkSafeYouTubeUrl;

        function init() {
            vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
        } init();

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }

        function checkSafeYouTubeUrl(url) {
            var parts = url.split('/');
            var id = parts[parts.length-1];
            url = "https://www.youtube.com/embed/"+id;
            console.log(url);
            return $sce.trustAsResourceUrl(url);
        }

    }
})(window.angular);