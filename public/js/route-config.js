(function() {
  'use struct';
  angular
    .module('alurapic')
    .config(routeConfig);

    function routeConfig($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider
        .when('/fotos', {
          templateUrl: 'partials/principal.html',
          controller: 'FotosController'
        })
        .when('/fotos/new', {
          templateUrl: 'partials/fotos.html',
          controller: 'FotoController'
        })
        .when('/fotos/edit/:fotoId', {
          templateUrl: 'partials/fotos.html',
          controller: 'FotoController'
        })
        .otherwise({redirectTo: '/fotos'});
    }
})();
