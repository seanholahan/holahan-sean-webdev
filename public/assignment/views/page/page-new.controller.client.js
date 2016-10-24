


(function (angular) {


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("PageNewController", PageNewController)

    function PageNewController($routeParams, PageService, $location) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.pageId = parseInt($routeParams.pid);
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm. widgetId = parseInt($routeParams.wgid);
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;
        vm.createPage = createPage;
        vm.paged = { "_id": 0,
            "name": "",
            "websiteId": "",
            "description": ""};

        function init() {
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
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

        function createPage(paged) {

            vm.paged._id = (new Date()).getTime();
            vm.paged.websiteId = this.websiteId;


            PageService.createPage(vm.paged);

            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");

      //      vm.pages = PageService.findWebsitesForUser(vm.userId);

        }


    }

})(window.angular);