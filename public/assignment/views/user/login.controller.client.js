(function(){
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

        function login(user) {
            console.log("loggin in");
           // var promise = UserService.findUserByCredentials(username, password);
            var promise = UserService.login(user);
            promise
                .success(function(user){

                    if(user === '0' || user === "") {
                        vm.error = "No such user";
                    } else {
                        $location.url("/user/" + user._id);
                    }
                })
                .error(function(bbbb){
                    console.log(bbbb);
                });
        }
    }
})();