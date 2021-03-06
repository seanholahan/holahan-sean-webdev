module.exports = function() {
    var mongoose = require("mongoose");
    //var WebsiteSchema = require("../website/website.schema.server")
    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: {type: String, required: true},
        //passwordVerify: {type: String, required: true},
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}],
        dateCreated: {type: Date, default: (new Date()).getTime()},
    }, {collection: 'user'});

    return UserSchema;
}