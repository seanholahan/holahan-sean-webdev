

(function (angular) {


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("PageEditController", PageEditController)

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.pageId = parseInt($routeParams.pid);
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm. widgetId = parseInt($routeParams.wgid);
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.pageId);
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();


        function updatePage(page) {
            PageService.updatePage(page);
            $location.url("/user/" + vm.userId + "/website/" +vm.websiteId + "/page");
        }

        function deletePage(pid) {
            PageService.deletePage(vm.pageId);
            $location.url("/user/" +vm.userId + "/website/"+vm.websiteId + "/page");
        }


    }

})(window.angular);
