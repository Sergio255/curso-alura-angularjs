(function() {
  'use strict';
  angular
    .module('alurapic')
    .controller('FotoController', fotoController);

  function fotoController($scope, $routeParams, recursoFoto) {
      $scope.foto = {};

      $scope.msg = '';

      if ($routeParams.fotoId) {
        recursoFoto.get({ fotoId: $routeParams.fotoId }
          , function (foto) {
            $scope.foto = foto;
          }, function (err) {
            console.log(err);
            $scope.msg = 'Não foi possível obter a foto.';
          });
      }

      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          if($scope.foto._id) {
            recursoFoto.update({ fotoId: $scope.foto._id }, $scope.foto
              , function () {
                $scope.msg = 'Foto ' + $scope.foto.titulo + 'alterada com sucesso.';
              }, function (err) {
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
