(function () {
  'use strict';

  angular
    .module('meusServicos', ['ngResource'])
    .factory('recursoFoto', recursoFoto);

  function recursoFoto($resource) {
    return $resource('v1/fotos/:fotoId', null, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
