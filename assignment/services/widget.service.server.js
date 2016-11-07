module.exports = function(app) {

    var widgets = [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>Watchmaker <a href="http://gizmodo.com/tag/mbf" rel="nofollow">MB&amp;F</a> isn’t as well-known as  Rolex or Timex, but that’s because the company’s unique creations—like a <a href="http://gizmodo.com/listen-to-an-18-000-tie-fighter-music-box-play-the-sta-1717444112" rel="nofollow">TIE Fighter-shaped music box</a> that plays the <em>Star Wars</em> theme—are made for die-hard collectors. Its latest creation is a <a href="https://www.mbandf.com/en/machines/co-creations/astrograph" target="_blank" rel="noopener">rocket-shaped pen inspired by the moon landing</a>, and I’m desperately trying to justify…<span class="read-more-placeholder"></span><span class="readmore-core-decorated"></span></p>'},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];


    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);


    function createWidget(req, res)  {
        var widget = req.body;
        widget._id = (new Date()).getTime();
        widgets.push(widget);
        res.send(widget);

    }


    function findAllWidgetsForPage(req,res) {
        var pid = req.params.pageId;
        var result = [];

        for(var w in widgets) {
            if(parseInt(widgets[w].pageId) == pid) {
                console.log(result);
                result.push(widgets[w]);
            }
        }
        res.json(result);

    }

    function findWidgetById(req, res) {
        var wid = req.params._id;
        for (var w in widgets) {
            if (parseInt(widgets[w]._id) === wid) {
                res.send(widgets[w]);
                return;
            }
        }
        res.send('0');

    }


    function updateWidget(req, res) {
        var widget = req.body;
        var wid = req.params._id;
        for (var w in widgets) {
            if (widgets[w]._id === wid) {
                widgets[w] = widget;
            }
        }
        res.send(200);
    }

    function deleteWidget(req, res) {
        var wid = req.params._id;
        for (var w in widgets) {
            if (parseInt(widgets[w]._id) === wid) {
                widgets.splice(parseInt(w), 1);
            }
        }
        res.send(200);
    }
};