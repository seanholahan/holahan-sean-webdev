(function (angular) {

    var WebAppMaker = angular.module("WebAppMaker");

    WebAppMaker.controller("RegisterController", RegisterController);




    function RegisterController($routeParams, $location, UserService) {
        var vm = this;
        vm.createUser = createUser;


        function createUser(username, password, passwordVerify) {


            if (password !== passwordVerify) {
                vm.error = "mismatch password";
            } else {
                var user = {_id: "13",
                    username: "",
                    password: "",
                    firstName: "",
                    lastName: ""};

                user._id = (new Date()).getTime();
                user.username = this.

                UserService.createUser(user);

                $location.url("/user/" + vm.userId + "/website");

                console.log(vm.websites);

                    vm.users = UserService.findWebsitesForUser(vm.userId);

                }
                $location.url("/user/"+ user._id)

        }
    }



})(window.angular)