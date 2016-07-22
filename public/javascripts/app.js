(function() {



    var app = angular.module('scrum', [angularDragula(angular), "xeditable", 'flip-element', 'slide-menu', 'columnas-module']);
    /*
    *Configuracion xeditable
    *set lookanfeel : bs3
    */
      app.run(function(editableOptions) {
          editableOptions.theme = 'bs3';
      });

    app.controller('dashboardController',['$scope','dragulaService','$http', function($scope,dragulaService,$http) {

        dashborad = this;
        dashborad.kanban = {};
        dashborad.header = "";

        /*
        *Obtener Tablero mUetsra
        *set dashborad.kanban = data
        *recurso : /tablero/1
        */
        $http.get("/tablero/1").success(function(data){
          dashborad.header = data.name;
          dashborad.kanban = data
        });

        //   $scope.$on('card-bag.drop', function (e, el,container) {
        //  });

        /*
        * Configuracion dragula columnas
        * set handle panel-title ng-binding || panel-heading
        */
        dragulaService.options($scope, 'column-bag', {
            moves: function(el, container, handle) {
                var hand = handle.className;

                var isHandle = (hand === 'panel-title ng-binding' || hand === 'panel-heading');
                return isHandle;
            }
        });


    }]);

    /*
    * Directiva Mmenu slide
    * recursoTemplate : /menuTemplate
    *restrict : elemnt
    */
    app.directive('menuSlide', function() {
        return {
            restrict: 'E',
            templateUrl: '/menuTemplate'
        };
    });





})();
