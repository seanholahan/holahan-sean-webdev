(function (angular) {

    var WebAppMaker = angular.module("WebAppMaker")
      WebAppMaker.controller("WebsiteEditController", WebsiteEditController);


    function WebsiteEditController($routeParams, WebsiteService, $location) {
        var vm = this;
        vm.websiteId = parseInt($routeParams.wid);
        vm.userId = parseInt($routeParams.uid);
        vm.updateWebsite = updateWebsite;
        vm.removeWebsite = removeWebsite;




      function init() {
        vm.website = WebsiteService.findWebsitesForUser(vm.userId);
          vm.pager = WebsiteService.findWebsiteById(vm.websiteId);

      }
      init();

        function updateWebsite(website) {
            WebsiteService.updateWebsite(website);
            $location.url("/user/" +vm.userId + "/website");
        }

        function removeWebsite(wid) {
            WebsiteService.removeWebsite(vm.websiteId);
            $location.url("/user/" + vm.userId + "/website");
        }
    }

}) (window.angular);



