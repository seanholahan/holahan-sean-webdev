(function (angular){


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("WidgetChooseController", WidgetChooseController)


    function WidgetChooseController($routeParams, WidgetService, $location) {
        var vm = this;
        vm.pageId = parseInt($routeParams.pid);
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.widgetId = parseInt($routeParams.wgid);



        function init() {
            vm.widgets = WidgetService.findWidgetById(vm.widgetId);
            vm.widget = WidgetService.findWidgetById(vm.widgetId);

        } init();



    }
})(window.angular);
