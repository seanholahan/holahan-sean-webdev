(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {

        var api = {
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite: updateWebsite,
            removeWebsite: removeWebsite
        };
        return api;

        function removeWebsite(websiteId, userId) {

            var url = "/api/website/"+ websiteId;

            console.log(url);
            console.log(userId);
            console.log(websiteId);

            console.log("websiteserviceClient REMOVE");
            return $http.delete(url, userId, websiteId);

        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/"+websiteId;
            $http.put(url, website);
        }

        function createWebsite(website, uid) {

            var url = "/api/user/"+uid+"/website";
            console.log(url);

            console.log("websiteserviceClient");
            var website = {
                name: website.name,
                description: website.description
            };
            return $http.post(url, website);
        }

        function findWebsiteById(wid) {
            var url = "/api/website/"+wid;
            console.log("getting from client");
            return $http.get(url);

        }

        function findWebsitesForUser(uid) {
            var url = "/api/user/"+uid+"/website";
            return $http.get(url, uid);
        }
    }
})();