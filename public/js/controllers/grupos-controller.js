(function (window, document, undefined) {
  'use strict';

  angular
    .module('alurapic')
    .controller('GruposController', gruposController);

    function gruposController($scope, $http) {
      $scope.grupos = [];

      $http.get('v1/grupos')
        .success(function (grupos) {
          $scope.grupos = grupos;
        })
        .error(function (err) {
          console.log(err);
        });
    }
})(window, document);
