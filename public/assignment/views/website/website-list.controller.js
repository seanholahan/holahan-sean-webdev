/**
 * Created by seanHolahan on 10/19/16.
 */
(function (angular) {


        var WebAppMaker = angular.module("WebAppMaker")
            .controller("WebsiteListController", WebsiteListController)

    function WebsiteListController($routeParams, WebsiteService) {
        var vm = this;
         vm.userId = parseInt($routeParams.uid);


        function init() {
            vm.websites = WebsiteService.findWebsitesForUser(vm.userId);
        }
        init();



    }

})(window.angular);