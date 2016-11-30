module.exports = function () {
    var model = {};
    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);
    var api = {
        createWidget: createWidget,
        findWidgetsForUser: findWidgetsForUser,
        setModel: setModel,
        findWidgetById: findWidgetById,
        findAllWidgetsForPage: findAllWidgetsForPage,
        deleteWidget: deleteWidget,
        updateWidget: updateWidget

    };
    return api;
    function setModel(_model) {
        model = _model;
    }

    function deleteWidget(widgetId, pageId) {
        return WidgetModel.remove({_id: widgetId})
            .then(function(widgetId) {
                console.log(widgetId);
                model.pageModel.findPageById(pageId).then(
                    function(page) {
                        model.pageModel.update(
                            {_id: pageId},
                            {$pull: {'_id': widgetId}}
                        );
                        return page.save();
                    }, function(error) {
                        console.log(error);
                    }
                )
            });

    }

    function updateWidget(widgetId, widget) {
        return WidgetModel
            .update(
                {
                    _id: widgetId
                }, {
                    name: widget.name,
                    text: widget.text,
                    type: widget.type,
                    placeholder: widget.placeholder,
                    description: widget.description,
                    url: widget.url,
                    width: widget.width,
                    height: widget.height,
                    rows: widget.rows,
                    size: widget.size,
                    class: widget.class,
                    deletable: widget.deletable,
                    formatted: widget.formatted
                });

    }

    function findWidgetById(widgetId) {
        return WidgetModel.findById(widgetId);

    }

    function findAllWidgetsForPage(widgetId) {
        return WidgetModel.find({_widget: widgetId});
    }

    function findWidgetsForUser(userId) {
        console.log(userId);
        console.log("findwidgets");
        return WidgetModel.findWidgetsForUser(userId);

    }
    function createWidget(pageId, widget) {
        console.log(pageId);
        console.log(widget);
        console.log("from the widgetmodel.server");

        return WidgetModel.create(widget)
            .then(function(widgetObj){
                model.userModel
                    .findUserById(userId)
                    .then(function(userObj){
                        userObj.widgets.push(widgetObj);
                        widgetObj._user = userObj._id;
                        widgetObj.save();
                        userObj.save();
                    }, function(error){
                        console.log(error);
                    });
            });
    }
};