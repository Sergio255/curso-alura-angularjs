(function() {
  'use strict';
  angular
    .module('alurapic')
    .controller('FotoController', fotoController);

  function fotoController($scope, $http, $routeParams) {
      $scope.foto = {};

      $scope.msg = '';

      if ($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId)
          .success(function (foto) {
            $scope.foto = foto;
          })
          .error(function (err) {
            console.log(err);
            $scope.msg = 'Não foi possível obter a foto.';
          });
      }

      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          if($scope.foto._id) {
            $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
              .success(function () {
                $scope.msg = 'Foto ' + $scope.foto.titulo + 'alterada com sucesso.';
              })
              .error(function (err) {
                console.log(err);
                $scope.msg = 'Não foi possível atualza a foto ' + $scope.foto.titulo +'.';
              });
          } else {
            $http.post('v1/fotos', $scope.foto)
            .success(function () {
              $scope.foto = {};
              $scope.msg = 'Foto Cadastrada com sucesso.';
            })
            .error(function (err) {
              console.log(err);
              $scope.msg = 'Erro ao cadastrar a foto: ' + err;
            });
          }
        }
      };
    }
})();
