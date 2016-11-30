(function (angular){


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("WidgetChooseController", WidgetChooseController)


    function WidgetChooseController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.pageId = $routeParams.pid;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.widgetId = $routeParams.wgid;



        function init() {
            vm.widgets = WidgetService.findWidgetById(vm.widgetId);
            vm.widget = WidgetService.findWidgetById(vm.widgetId);

        } init();



    }
})(window.angular);
