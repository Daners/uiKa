(function() {

    var app = angular.module('tareas-module', []);

    app.directive('tareas', function() {
        return {
            restrict: 'E',
            templateUrl: '/tareasTemplate'
        };
    });

    app.directive('addCard', function() {
        return {
            restrict: 'AE',
            link: function(scope, ele, attr) {
                ele.bind('click', function(e) {
                    scope.column.cards.push({
                        tittle: "",
                        desc: ""
                    });
                    scope.$apply();

                });
            }
        };
    });


    app.directive('deleteCard', function() {
        return {
            restrict: 'AE',
            link: function(scope, ele, attr) {
                ele.bind('click', function(e) {

                    scope.column.cards.removeValue("$$hashKey", scope.card.$$hashKey);
                    scope.$apply();

                });
            }
        };
    });
})();
