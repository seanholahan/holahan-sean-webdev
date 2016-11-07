(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);
        vm.uid  = $routeParams.uid;
        vm.wid  = $routeParams.wid;
        vm.pid  = $routeParams.pid;
        vm.wgid = $routeParams.wgid;


        function init() {
            var promise = WebsiteService.findWebsitesForUser(vm.userId);
            promise
                .success(function(websites){
                    vm.websites = websites;
                });
        }
        init();
    }

})(window.angular);


