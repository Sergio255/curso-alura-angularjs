(function() {
  'use strict';
  angular
    .module('minhasDiretivas', [])
    .directive('meuPainel', meuPainel)
    .directive('minhaFoto', minhaFoto)
    .directive('meuBotaoPerigo', meuBotaoPerigo);

  function meuPainel() {
    return {
      'restric': 'AE'
      , 'scope': {
        'titulo': '@'
      }
      , 'templateUrl': 'js/directives/meu-painel.html'
      , 'transclude': true
    };
  }

  function minhaFoto() {
    return {
      'restrict': 'E'
      , 'scope': {
        'titulo': '@'
        , 'url': '@'
      }
      , 'templateUrl': 'js/directives/minha-foto.html',
    };
   }

function meuBotaoPerigo() {
    return {
      restrict: 'E'
      , scope: {
        acao: '&'
        , nome: '@'
      }
      , template: '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{ nome }}</button>'
      , transclude: true
    };
  }
})();
