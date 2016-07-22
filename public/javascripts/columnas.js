(function() {

    var app = angular.module('columnas-module', ['tareas-module', ]);
    app.directive('columnas', function() {
        return {
            restrict: 'E',
            templateUrl: '/columnasTemplate'
        };
    });



    /*  dashborad.deleteColumn = function(column) {

          dashborad.kanban.columns.removeValue("$$hashKey", column.$$hashKey);

      };

      dashborad.addColumn = function() {

          dashborad.kanban.columns.push({
              title: "",
              color: "",
              cards: []
          });
      }*/
})();
