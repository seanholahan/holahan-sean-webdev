(function (angular) {


    var WebAppMaker = angular.module("WebAppMaker")
        .controller("PageListController", PageListController)

    function PageListController($routeParams, PageService) {
        var vm = this;
        vm.websiteId = $routeParams.wid;
        vm.uid  = $routeParams.uid;
        vm.wid  = $routeParams.wid;
        vm.pid  = $routeParams.pid;
        vm.wgid = $routeParams.wgid;

       /* vm.updatePage = updatePage;
        vm.removePage = removePage;*/


        function init() {

            var promise = PageService.findAllPagesForWebsite(vm.websiteId);
            promise
                .success(function(pages){

                  //  console.log(website.pages);
                    console.log("page list controller.client -> page")
                    //console.log(newPage.pages)
                    console.log(vm);
                    console.log("page list controller.client -> vm")

                    vm.pages = pages;
                    console.log(vm.pages);

                });

        }
        init();
    }

})(window.angular);
