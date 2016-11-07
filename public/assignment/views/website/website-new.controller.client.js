/**
 * Created by seanHolahan on 10/20/16.
 */
(function (angular) {

    var WebAppMaker = angular.module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController)





        function WebsiteNewController(WebsiteService, $routeParams, $location) {
            var vm = this;
            vm.userId = parseInt($routeParams.uid);
            vm.uid  = $routeParams.uid;
            vm.wid  = $routeParams.wid;
            vm.pid  = $routeParams.pid;
            vm.wgid = $routeParams.wgid;
            vm.createWebsite =createWebsite;


            function createWebsite(uid, website) {
                WebsiteService
                    .createWebsite(uid, website)
                    .success(function(){
                        $location.url("/user/"+vm.userId+"/website");

                    })
                    .error(function (error) {

                    });

            }

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
