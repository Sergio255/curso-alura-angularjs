(function() {
  'use strict';
  angular
    .module('minhasDiretivas', [])
    .directive('meuPainel', meuPainel)
    .directive('minhaFoto', minhaFoto)
    .directive('meuBotaoPerigo', meuBotaoPerigo)
    .directive('meuFocus', meuFocus)
    .directive('meusTitulos', meusTitulos);

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

  function meuFocus() {
    return {
      link: fnFocus
      , restrict: 'A'
    };

    function fnFocus(scope, element, attrs) {
      scope.$on('fotoCadastrada', function () {
        element[0].focus();
      });
    }
  }

  function meusTitulos() {
    return {
      controller: meusTitulosCtrl
      , restrict: 'E'
      , template: '<ul><li ng-repeat="titulo in titulos">{{ titulo }}</li></ul>'
    };

    function meusTitulosCtrl($scope, recursoFoto) {
      recursoFoto.query(function (fotos) {
        $scope.titulos = fotos.map(function (foto) {
          return foto.titulo;
        });
      });
    }
  }
})();
