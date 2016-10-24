(function (angular) {

       var WebAppMaker = angular.module("WebAppMaker");

        WebAppMaker.controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.userId = parseInt($routeParams.uid);


        var user = UserService.findUserById(vm.userId);

        if (user != null) {
            vm.user = user;
        }
    }
})(window.angular);