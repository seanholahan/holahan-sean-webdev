(function(){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService($http) {
        // var users = [
        //     {username: 'alice', password: 'ewq', _id: 123, first: 'Alice', last: 'Wonderland'},
        //     {username: 'bob', password: 'ewq', _id: 234, first: 'Bob', last: 'Dylan'},
        //     {username: 'charlie', password: 'ewq', _id: 345, first: 'Charlie', last: 'Brown'}
        // ];

        var api = {
            findPageByWebsiteId: findPageByWebsiteId,
            findUserById: findUserById,
            createUser: createUser,
            updateUser: updateUser,
            unregisterUser: unregisterUser,
            login: login
        };
        return api;

        function unregisterUser(uid) {
            var url = "/api/user/" + uid;
            return $http.delete(url);
        }

        function login(u) {
            var user = {
                username: u.username,
                password: u.password
            };
            return $http.post("/api/login", user);
        }

        function updateUser(user) {
            var url = "/api/user/" + user._id;


            $http.put(url, user);
        }

        function createUser(username, password) {

            var user = {
                username: username,
                password: password
            };
            return $http.post("/api/user", user);
        }

        function findUserById(userId) {
            var url = "/api/user/"+userId;
            return $http.get(url);
            // for(var u in users) {
            //     user = users[u];
            //     if(user._id === userId) {
            //         return user;
            //     }
            // }
            // return null;
        }

        function findPageByWebsiteId(websiteId) {
            var url = '/api/user?username='+username+'&password='+password;
            return $http.get(url);
            // for(var u in users) {
            //     user = users[u];
            //     if(    user.username === username
            //         && user.password === password) {
            //         return user;
            //     }
            // }
            // return null;
        }
    }
})();