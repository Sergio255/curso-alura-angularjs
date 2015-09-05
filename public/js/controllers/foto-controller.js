(function() {
  'use strict';
  angular.module('alurapic')
    .controller('FotoController', function ($scope, $http) {
      $scope.foto = {};

      $scope.msg = '';

      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          $http.post('v1/fotos', $scope.foto)
            .success(function (data) {
              $scope.foto = {};
              $scope.msg = 'Foto Cadastrada com sucesso.';
            })
            .error(function (err) {
              $scope.msg = 'Erro ao cadastrar a foto: ' + err;
            });
        }
      };
    });
})();
