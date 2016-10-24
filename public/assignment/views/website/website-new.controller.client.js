/**
 * Created by seanHolahan on 10/20/16.
 */
(function (angular) {

    var WebAppMaker = angular.module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController)


    function WebsiteNewController($routeParams, WebsiteService, $location) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);
        vm.websiteId = parseInt($routeParams.wid);
        vm.createWebsite = createWebsite;


        function init() {
            vm.websites = WebsiteService.findWebsitesForUser(vm.userId);

        }
        init();

        function createWebsite(website) {
            website._id = (new Date()).getTime();
            website.developerId = this.userId;
            console.log(website);
            WebsiteService.createWebsite(website);

            $location.url("/user/" + vm.userId + "/website");

            vm.websites = WebsiteService.findWebsitesForUser(vm.userId);
            console.log(vm.websites);
        }
    }

}) (window.angular);
