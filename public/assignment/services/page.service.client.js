

(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService($http) {


        /*var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];*/

        var api = {
            createPage: createPage,
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage : deletePage,
            findAllPagesForWebsite: findAllPagesForWebsite
        };

        return api;

        function findAllPagesForWebsite(websiteId) {
            var url = "/api/website/"+websiteId+"/page";
            console.log(websiteId);
            console.log("page service client -> websiteId");
            return $http.get(url);
        }

        function createPage(websiteId, page) {
            console.log(websiteId);

            var url = "/api/website/"+websiteId+"/page";
            var page = {
                name: page.name,
                title: page.title
            };
            console.log(page);
            console.log("pageserviceClient");
            return $http.post(url, page);
        }

        function findPagesByWebsiteId(websiteId) {
            var url = "/api/website/"+websiteId+"/page";
            console.log(websiteId);
            console.log("page service client -> websiteId");
            return $http.get(url, websiteId);

        }

        function findPageById(pageId) {
            var url = "/api/page/"+pageId;
            return $http.get(url);
        }

        function updatePage(pageId, page) {
            var url = "/api/page/"+pageId;
            console.log(url, "URL BETCH");
             $http.put(url, page);
        }

        function deletePage(pageId, websiteId) {
            var url = "/api/page/"+pageId;
            return $http.delete(url, pageId, websiteId);
        }
    }
}) (window.angular);
