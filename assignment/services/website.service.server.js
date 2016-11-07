module.exports = function(app) {
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




    function findWebsiteById(req, res)  {
        var wid = req.params.websiteId;
        for (var w in websites) {
            if (parseInt(websites[w]._id) === wid) {
                res.send(websites[w]);
                return;
            }
        }
        res.send('0');
    }


    function updateWebsite(req,res) {
        var website = req.body;
        var wid = req.params._id;
        for (var w in websites) {
            if (websites[w]._id === wid) {
                websites[w] = website;
            }
        }
        res.send(200);
    }

    function deleteWebsite(req, res) {
        console.log("3");
        var wid = req.params._id;
        for (var w in websites) {
            if (parseInt(websites[w]._id) === wid) {
                websites.splice(parseInt(w), 1);
            }
        }
        res.send(200);
    }


    function createWebsite(req, res) {

        var website = req.body;
        console.log(website);
        website._id = (new Date()).getTime();
        website.uid = req.params.userId;
        websites.push(website);
        res.send(website);
        console.log(websites);

    }

    function findAllWebsitesForUser(req, res) {
        var uid = req.params.userId;

        var result = [];
        for(var w in websites) {
            if(websites[w].uid == uid) {
                result.push(websites[w]);
            }
        }
        res.json(result);
    }
};