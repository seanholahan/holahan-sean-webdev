

(function (angular) {


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("PageEditController", PageEditController)

    function PageEditController($routeParams, PageService, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

        function init() {
            //vm.pages = PageService.findPageByWebsiteId(vm.pageId);
            vm.page = PageService.findPageById(vm.pageId)
                .success(function(pages){
                    vm.page = pages;
                });

            console.log(vm.page);
        }
        init();


        function updatePage(page) {
            PageService.updatePage(vm.pageId, page);
            console.log(vm.pageId, "JOLLY ROANFS");

                    $location.url("/user/" + vm.userId + "/website/" +vm.websiteId + "/page");


        }

        function deletePage() {
            console.log(vm.pid,"WE ARE DELETING THIS PAGE");
            PageService.deletePage(vm.pageId, vm.websiteId);
            $location.url("/user/" +vm.userId + "/website/"+vm.websiteId + "/page");
        }


    }

})(window.angular);
