(function (angular) {


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("PageListController", PageListController)

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.websiteId = parseInt($routeParams.wid);
        vm.uid  = $routeParams.uid;
        vm.wid  = $routeParams.wid;
        vm.pid  = $routeParams.pid;
        vm.wgid = $routeParams.wgid;

       /* vm.updatePage = updatePage;
        vm.removePage = removePage;*/


        function init() {

            var promise = PageService.findPagesByWebsiteId(vm.websiteId);
            promise
                .success(function(pages){
                    vm.pages = pages;
                });

        }
        init();
    }

})(window.angular);
