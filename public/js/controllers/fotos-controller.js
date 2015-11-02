(function() {
  'use strict';
  angular
    .module('alurapic')
    .controller('FotosController', fotosController);

  function fotosController($scope, $http) {
      $scope.filtro = '';

      $scope.fotos = [];

      $scope.msg = '';

      $http.get('v1/fotos')
        .success(function (data) {
          $scope.fotos = data;
        })
        .error(function (err) {
          console.log(err);
        });

      $scope.remover = function (foto) {
        $http.delete('v1/fotos/' + foto._id)
          .success(function () {
            var indice = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indice, 1);
            $scope.msg = 'Foto ' + foto.titulo + ' foi removida com sucesso.';
          })
          .error(function (err) {
            console.log(err);
            $scope.msg = 'Não foi possível remover a foto ' + foto.titulo + '.';
          });
      };
    }
})();
