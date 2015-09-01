(function() {
  angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
      return {
        'restric': 'AE',
        'scope': {
          'title': '@'
        },
        'templateUrl': 'js/directives/meu-painel.html',
        'transclude': true
      };
    });
})();
