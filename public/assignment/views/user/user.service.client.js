(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService)

    function UserService() {
        var users = [
            {username: 'alice', password: 'eqdfs'}
        ];

        var api = {
            findUserByCredential: findUserByCredentials,
            createUser: createUser,
            findUserById: findUserById,
            findUserByUsername : findUserByUsername,
            updateUser: updateUser,
            deleteUser:deleteUser
        };
        return api;


        function createUser(user) {
            user._id = (new Date()).getTime();
            website.developerId = this.userId;
            console.log(website);
            WebsiteService.createWebsite(website);

            $location.url("/user/" + vm.userId + "/website");

            vm.websites = WebsiteService.findWebsitesForUser(vm.userId);
            console.log(vm.websites);

        }

        function findUserById(userId) {

        }

        function findUserByUsername(username) {

        }



        function findUserByCredentials(username, password) {
            for (var u in users) {
                var user = users[u];
                if (user.username === username && user.password === password) {
                    found = true;
                    break;
                }

            }
        }

        function updateUser(userId, user) {

        }

        function deleteUser(userId) {

        }





    }

}) (window.angular)

