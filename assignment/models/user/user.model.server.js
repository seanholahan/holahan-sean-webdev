module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var UserSchema = require("./user.schema.server")();
    var UserModel  = mongoose.model("UserModel", UserSchema);

    var api = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        findWebsitesForUser: findWebsitesForUser,
        updateUser: updateUser,
        removeUser: removeUser,
        setModel: setModel
    };
    return api;


    function setModel(_model) {
        /*console.log(_model);
        console.log("model");*/

        model = _model;
    }

    function findWebsitesForUser(userId) {
        console.log(userId);
        console.log("ducker");

        return UserModel
            .findById(userId)
            .populate("websites", "name")
            /*.exec();*/
           // return UserModel.findById(userId)
    }

    function removeUser(userId) {
        return UserModel
            .remove({_id: userId});
    }

    function findUserByCredentials(username, password) {
        return UserModel.find({
            username: username,
            password: password
        });
    }

    function updateUser(userId, user) {
        console.log(userId);
        console.log(user);
        console.log("blowze");

        return UserModel
            .update(
                {
                    _id: userId
                },
                {
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            );
    }

    function findUserById(userId) {
        // UserModel.find({_id: userId}) --> returns an array
        return UserModel.findById(userId);
    }

    function createUser(user) {
        console.log(user);
        console.log("hai from the user model server");
        return UserModel.create(user);


    }
};