


(function (angular) {


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("PageNewController", PageNewController)

    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.pageId = $routeParams['pid'];
        vm.websiteId = $routeParams['wid'];

        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        vm.createPage = createPage;


        function init() {
            vm.pages = PageService.findPagesByWebsiteId(vm.websiteId);
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

        function createPage(websiteId, page) {
            console.log(page);
            console.log(websiteId);
            console.log("dictation");
            PageService.createPage(websiteId, page);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");

      //      vm.pages = PageService.findWebsitesForUser(vm.userId);

        }


    }

})(window.angular);