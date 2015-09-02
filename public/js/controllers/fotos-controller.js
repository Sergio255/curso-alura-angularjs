(function() {
  angular.module('alurapic')
    .controller('FotosController', function ($scope, $http) {
      $scope.filtro = '';

      $scope.fotos = [];

      $http.get('v1/fotos')
        .success(function (data) {
          $scope.fotos = data;
        })
        .error(function (err) {
          console.log(err);
        });
    });
})();
