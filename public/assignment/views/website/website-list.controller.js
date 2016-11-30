
(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams['uid'];

        function init() {
            var promise = WebsiteService.findWebsitesForUser(vm.userId);
            promise
                .success(function(user){
                    console.log(user.websites);
                    console.log("groovy");

                    vm.websites = user.websites;
                });
        }
        init();
    }
})();
