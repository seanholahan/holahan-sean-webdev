(function () {
    angular

    .module("WebAppMaker")

        .factory("WebsiteService", WebsiteService)

    function WebsiteService() {
         var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];



        var api = {
            createWebsite: createWebsite,
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            removeWebsite: removeWebsite,
            updateWebsite: updateWebsite

        };
        return api;

        function createWebsite(website) {
            websites.push(website);
        }

        function removeWebsite(wid) {
            for (var w in websites) {
                if (parseInt(websites[w]._id) === wid) {
                    websites.splice(parseInt(w), 1);
                }
            }
        }

        function findWebsitesForUser(uid) {
            var results = [];

            for (var w in websites) {
                if (parseInt(websites[w].developerId) === uid) {
                    results.push(websites[w]);
                }
            }

            return results;
        }

        function findWebsiteById(wid) {

            for (var w in websites) {
                if (parseInt(websites[w]._id) === wid) {
                    return websites[w];
                }
            }
            return null;
        }


        function updateWebsite(website) {
            for (var w in websites) {
                if (websites[w]._id === website._id) {
                    websites[w] = website;
                }
            }
        }
    }
 })();