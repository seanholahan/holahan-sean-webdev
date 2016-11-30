module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var WebsiteSchema = require("./website.schema.server")();
    var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);
    var api = {
        createWebsite: createWebsite,
        findAllWebsitesForUser: findAllWebsitesForUser,
        setModel: setModel,
        findWebsiteById: findWebsiteById,
        findAllPagesForWebsite: findAllPagesForWebsite,
        deleteWebsite: deleteWebsite,
        updateWebsite: updateWebsite,
        reorderWidget: reorderWidget
    };
    return api;
    function setModel(_model) {
        model = _model;
    }

    function updateWebsite(websiteId, website) {
        console.log(websiteId);
        console.log(website);
        console.log("HIGHWATER PANTS");

        return WebsiteModel
            .update(
            {
            _id: websiteId
        }, {
            name: website.name,
            description: website.description

        });


    }

    function deleteWebsite(websiteId, userId) {
        console.log(websiteId);
        console.log(userId);
        console.log("model server delete");
        return WebsiteModel.remove({_id: websiteId})
            .then(function(websiteId) {
                console.log(websiteId);
                model.userModel.findUserById(userId).then(
                    function(user) {
                        model.userModel.update(
                            {_id: userId},
                            {$pull: {'_id': websiteId}}
                        );
                        return user.save();
                    }, function(error) {
                        console.log(error);
                    }
                )
            });

    }

    function findWebsiteById(wid) {
        console.log("find by id website mode server");
        console.log(wid);
        var you =WebsiteModel.findById(wid);
        //console.log(you);
        return WebsiteModel.findById(wid);

    }

    function findAllPagesForWebsite(websiteId) {
        return WebsiteModel.
        findById(websiteId).populate("pages", "name")
            //return WebsiteModel.findById(websiteid)
    }

    function findAllWebsitesForUser(userId) {
        console.log(userId);
        console.log("findwebsites in web model server");
        return model.userModel.findWebsitesForUser(userId);
    }

    function createWebsite(userId, website) {
        console.log(userId);
        console.log(website);
        console.log("from the websitemodel.server");

        return WebsiteModel.create(website)
            .then(function(websiteObj){
                model.userModel
                    .findUserById(userId)
                    .then(function(userObj){
                        userObj.websites.push(websiteObj);
                        websiteObj._user = userObj._id;
                        websiteObj.save();
                         userObj.save();
                    }, function(error){
                        console.log(error);
                    });
            });
    }

    function reorderWidget(pageId, start, end) {
        console.log(pageId, start, end,"this is how you re-order a widget, right?!" +
                                        "by doing nothing?!, I Hope so!" +
            "                           ...at least i defined it");
        return start + end;
    }
};