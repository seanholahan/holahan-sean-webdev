(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, WebsiteService, $location) {
        var vm = this;
        vm.userId = $routeParams['uid'];
        vm.uid  = $routeParams.uid;
        vm.wid  = $routeParams.wid;
        vm.pid  = $routeParams.pid;
        vm.wgid = $routeParams.wgid;
        vm.updateWebsite = updateWebsite;
        vm.removeWebsite = removeWebsite;


        function init() {


            var websitePromise =  WebsiteService.findWebsiteById(vm.wid);
            websitePromise
                .success(function(website) {
                    vm.website = website;

                })
            var websitesPromise = WebsiteService.findWebsitesForUser(vm.userId);
            websitesPromise
                .success(function(websites){
                    vm.websites = websites.websites;

                });
        }
        init();

        function updateWebsite(website) {
            WebsiteService.updateWebsite(vm.wid ,website);
            $location.url("/user/"+vm.userId+"/website");
            /* Getting errors that website is nothing!! :(
            .success(function(website){
                console.log(userId);
                console.log("baloes");
                $location.url("/user/"+userId+"/website/");
            })
                .error(function(){

                });*/
        }

        function removeWebsite() {
            console.log(vm.wid);

            console.log("removing");
            WebsiteService
                .removeWebsite(vm.wid, vm.uid);
                $location.url("/user/"+vm.userId+"/website");
                /*.success(function(){
                    $location.url("/login");
                })
                .error(function(){

                });*/

        }
    }

})(window.angular);


