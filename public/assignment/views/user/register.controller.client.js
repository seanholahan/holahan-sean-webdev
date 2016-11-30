(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);


    function RegisterController(UserService, $location,$routeParams, $http) {
        var vm = this;
        var userId = $routeParams.uid;
        vm.register = register;

        function findUser() {
            console.log("finding user reg controller client")
            $http.get("/api/user")
                .success(function(user) {
                    $scope.user = user[0];
                    $location.url("/user/"+ $scope.user._id);
                })
        }



        function register(user) {
                /*if(user.password === user.passwordVerify) {*/
            UserService
                .createUser(user.username, user.password)
                .success(function(user) {
                    $location.url("/user/"+ user._id);
                });


        }
    }
})();


