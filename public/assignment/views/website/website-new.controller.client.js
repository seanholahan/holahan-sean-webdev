
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;
        vm.usersId = $routeParams['uid'];

        vm.createWebsite = createWebsite;

        function init() {
            var promise = WebsiteService.findWebsitesForUser(vm.usersId);

            promise
                .success(function(user){
                    vm.websites = user.websites;
                });
        }
        init();


        function createWebsite(website , uid) {
            console.log(website);
            console.log("controller.client website");
            console.log(vm.usersId);
            console.log("controller.client input userid");

            WebsiteService
                .createWebsite(website, uid)
                   // vm.websites = website.websites;
                    $location.url("/user/"+vm.usersId+"/website");
               // });
        }
    }
})();