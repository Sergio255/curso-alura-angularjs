(function() {
  'use strict';
  angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
      return {
        'restric': 'AE',
        'scope': {
          'titulo': '@'
        },
        'templateUrl': 'js/directives/meu-painel.html',
        'transclude': true
      };
    })
    .directive('minhaFoto', function () {
      return {
        'restrict': 'E',
        'scope': {
          'titulo': '@',
          'url': '@'
        },
        'templateUrl': 'js/directives/minha-foto.html',
      }
    });
})();
