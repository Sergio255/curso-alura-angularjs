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
    });
})();
