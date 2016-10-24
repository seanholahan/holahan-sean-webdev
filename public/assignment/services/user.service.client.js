(function ()
{
    angular

        .module("WebAppMaker")
        .factory("UserService", UserService);

    function UserService() {


        var users = [
            {_id: 123, username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: 234, username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: 345, username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: 456, username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ]

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            createUser: createUser,
                findUserByUsername : findUserByUsername,
                updateUser: updateUser,
                deleteUser:deleteUser
    }
        ;
        return api;


        function deleteUser(userId) {
            for (var u in users) {
                if (parseInt(users[u]._id) === userId) {
                    users.splice(parseInt(u), 1);
                }
            }

        }


        function updateUser(userId, user) {
            for (var u in users) {
                if (users[u]._id === user._id) {
                    users[u] = user;
                }
            }
        }


        function findUserByUsername(username) {
            for (var u in users) {
                user = users[u];
                if (user.name === username) {
                    return user;
                }
            }
            return null;

        }


        function createUser(user) {
            users.push(user);



        }

        function findUserById(userId) {
            for (var u in users) {
                user = users[u];
                if (user._id === userId) {
                    return user;
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for (var u in users) {
                user = users[u];

                if (user.username === username && user.password === password) {

                    return user;

                }
            }
            return null;
        }
    }

})();



