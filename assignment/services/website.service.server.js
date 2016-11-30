module.exports = function(app, model) {
    var websites = [
        {_id: 321, name: 'facebook.com', uid: 123},
        {_id: 456, name: 'wikipedia.org', uid: 123},
        {_id: 543, name: 'twitter.com', uid: 234}
    ];

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);


    function findAllWebsitesForUser(req, res) {
        console.log(req.params.userId)
        console.log(req.params)
        console.log("website service.server get")
        model.websiteModel
            .findAllWebsitesForUser(req.params.userId)
            .then(function(websites){
                res.json(websites);
            });
    }

    function findWebsiteById(req, res)  {
        var wid = req.params.websiteId;
        console.log("yo from the website new controller");
        console.log(websites);
        console.log(wid);

        model
            .websiteModel
            .findWebsiteById(wid)
            .then(
                function (websites) {
                    if (websites) {
                        console.log(websites);
                        console.log("you service.server fuckboi");
                        res.json(websites);
                    } else {
                        res.send('0')
                    }
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
            //res.send(websites[0]);
        //res.send('0');
    }


    function updateWebsite(req,res) {
        var website = req.body;
        var wid = req.body._id;
        console.log(website);
        console.log(wid);
        console.log("updateWebsite");
        model
            .websiteModel
            .updateWebsite(wid, website)
            .then(
                function(status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function deleteWebsite(req, res) {
        var wid = req.params.websiteId;
        var uid = req.params;
        console.log(wid);
        console.log(uid);
        console.log("delete website service");

        model
            .websiteModel
            .deleteWebsite(wid)
            .then(
                function (status) {
                    res.sendStatus(200);
                },
                function (error) {
                    res.sendStatus(400).send(error);
                }
            )
    }

    function createWebsite(req, res) {
        var website = req.body;
        console.log(website);
        console.log("is this undefined at the websiteService");
        model
            .websiteModel
            .createWebsite(req.params.userId, website)
            .then(
                function(uid, newWebsite) {
                    console.log(model.websiteModel.createWebsite);
                console.log(newWebsite);
                console.log("is website.service.server");
                res.send(newWebsite);
            },
            function(error) {
                res.sendStatus(400).send(error);
            });
    }
};