(function(){
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {


        var api = {
            createWidget: createWidget,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            findWidgetsForPage: findWidgetsForPage,
            findWidgetById: findWidgetById
        };
        return api;


        function createWidget(pageId, widget) {
            var url = "/api/page/"+pageId+"/widget";
            $http.post(url, widget);
        }

        function updateWidget(widgetId, widget) {
            var url = "/api/widget/"+widgetId;
            $http.put(url, widget);

        }

        function deleteWidget(widgetId) {
            var url = "/api/widget/"+widgetId;
            $http.delete(widgetId);

        }

        function findWidgetById(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.get(url);
        }

        function findWidgetsForPage(pageId) {
            var url = "/api/page/"+pageId+"/widget";
            return $http.get(url);
        }
    }
})(window.angular);