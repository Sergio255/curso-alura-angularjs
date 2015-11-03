(function() {
  'use strict';
  angular
    .module('alurapic')
    .controller('FotoController', ['$scope', '$routeParams', 'recursoFoto', 'cadastroFotos', fotoController]);

  function fotoController($scope, $routeParams, recursoFoto, cadastroFotos) {
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
          cadastroFotos.cadastrar($scope.foto)
            .then(function (dados) {
              $scope.msg = dados.msg;
              if (dados.inclusao) {
                $scope.foto = {};
              }
            })
            .catch(function (dados) {
              $scope.msg = dados.msg;
            });
        }
      };
    }
})();
