(function (angular) {

    var WebAppMaker = angular.module("WebAppMaker")
    function LoginController($location, UserService) {
        var vm = this;
        vm.hello = "hello from the controller";
        vm.login = login;

        function login(username, password) {

            var user = UserService.findUserByCredentials(username, password);


            if (user === null) {
                vm.error = "no such user";
            } else {
                $location.url("/user/" + user._id)
            }
        }
    }
    WebAppMaker.controller("LoginController", LoginController);


})(window.angular)