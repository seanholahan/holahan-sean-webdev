module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var PageModel = mongoose.model("PageModel", PageSchema);
    var api = {
        createPage: createPage,
        updatePage: updatePage,
        deletePage: deletePage,
        setModel:setModel,
        findPageById: findPageById,
        findAllPagesForWebsite: findAllPagesForWebsite

    };
    return api;
    function setModel(_model) {
        model = _model;
    }

    function deletePage(pageId, websiteId) {
        return PageModel.remove({_id: pageId})
            .then(function(pageId) {
                console.log(pageId);
                model.websiteModel.findWebsiteById(websiteId).then(
                    function(website) {
                        model.websiteModel.update(
                            {_id: websiteId},
                            {$pull: {'_id': pageId}}
                        );
                        return website.save();
                    }, function(error) {
                        console.log(error);
                    }
                )
            });    }

    function updatePage(pageId, page){
        return PageModel
            .update(
                {
                    _id: pageId
                }, {
                    name: page.name,
                    title: page.title

                });
    }



    function findPageById(pageId) {
        return PageModel.findById(pageId);

    }

    function findAllPagesForWebsite(websiteId) {
        return PageModel.find({_website: websiteId});
        //return PageModel.findAllPagesForWebsite(websiteId);

    }


    function createPage(websiteId, page) {

        page._website = websiteId;
        return PageModel.create(page)
            .then(function(pageObj){
                model.websiteModel
                    .findWebsiteById(websiteId)
                    .then(function(websiteObj){
                        websiteObj.websites.push(websiteObj);
                        websiteObj._user = websiteObj._id;
                        websiteObj.save();
                        websiteObj.save();
                    }, function(error){
                        console.log(error);
                    });
            });
    }
};