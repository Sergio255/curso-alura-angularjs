(function() {
  'use strict';
  angular
    .module('minhasDiretivas', [])
    .directive('meuPainel', meuPainel)
    .directive('minhaFoto', minhaFoto);

  function meuPainel() {
      return {
        'restric': 'AE',
        'scope': {
          'titulo': '@'
        },
        'templateUrl': 'js/directives/meu-painel.html',
        'transclude': true
      };
    }

  function minhaFoto() {
      return {
        'restrict': 'E',
        'scope': {
          'titulo': '@',
          'url': '@'
        },
        'templateUrl': 'js/directives/minha-foto.html',
      };
    }
})();
