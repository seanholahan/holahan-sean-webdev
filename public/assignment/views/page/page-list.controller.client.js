(function (angular) {


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("PageListController", PageListController)

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);


        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
            vm.website = PageService.findPageByWebsiteId(vm.websiteId);
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();

        function updatePage(page) {
            PageService.updatePage(page);
            $location.url("/user/" +vm.userId + "/website");
        }

        function removePage(wid) {
            WebsiteService.deletePage(vm.pageId);
            $location.url("/user/" + vm.userId + "/website" + vm.websiteId + "/page");
        }

    }

})(window.angular);
