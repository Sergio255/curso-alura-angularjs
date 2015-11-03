(function() {
  'use strict';
  angular
    .module('alurapic')
    .controller('FotosController', fotosController);

  function fotosController($scope, recursoFoto) {

    $scope.filtro = '';

    $scope.fotos = [];

    $scope.msg = '';

    recursoFoto.query(function (fotos) {
      $scope.fotos = fotos;
    }, function (err) {
      console.log(err);
    });


    $scope.remover = function (foto) {
      recursoFoto.delete({ fotoId: foto._id }
        , function () {
          var indice = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indice, 1);
          $scope.msg = 'Foto ' + foto.titulo + ' foi removida com sucesso.';
        }, function (err) {
          console.log(err);
          $scope.msg = 'Não foi possível remover a foto ' + foto.titulo + '.';
        });
    };
  }
})();
