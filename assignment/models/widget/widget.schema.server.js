module.exports = function() {
    var mongoose = require("mongoose");
    //var WebsiteSchema = require("../website/website.schema.server")
    var WidgetSchema = mongoose.Schema({
        _page: {type: mongoose.Schema.Types.ObjectId, ref:"PageModel"},
        type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT'] },
        name: String,
        text:  String,
        placeholder:  String,
        description:  String,
        url:  String,
        width:  String,
        height:  String,
        rows:  Number,
        size:  Number,
        class:  String,
        icon:  String,
        deletabe: Boolean,
        formatted: Boolean,

        dateCreated: {type: Date, default: (new Date()).getTime()},
    }, {collection: 'page'});

    return WidgetSchema;
}
