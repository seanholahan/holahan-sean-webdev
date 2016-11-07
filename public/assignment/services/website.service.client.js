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

        function removeWebsite(websiteId) {
            var url = "/api/website/"+ websiteId;
            $http.delete(url);

        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/"+websiteId;
            $http.put(url, website);
        }

        function createWebsite(uid, website) {
            var url = "/api/user/"+uid+"/website";
            $http.post(url, website);
        }

        function findWebsiteById(wid) {
            var url = "/api/website/"+wid;
            return $http.get(url);

        }

        function findWebsitesForUser(uid) {
            var url = "/api/user/"+uid+"/website";
            return $http.get(url, uid);
        }
    }
})();