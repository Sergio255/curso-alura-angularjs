(function () {
  'use strict';

  angular
    .module('meusServicos', ['ngResource'])
    .factory('recursoFoto', recursoFoto)
    .factory('cadastroFotos', cadastroFotos);

  function recursoFoto($resource) {
    return $resource('v1/fotos/:fotoId', null, {
      update: {
        method: 'PUT'
      }
    });
  }

  function cadastroFotos(recursoFoto, $q) {
    return {
      cadastrar: cadastrarFoto
    };

    function cadastrarFoto(foto) {
      return $q(function (resolve, reject) {
        if (foto._id) {
          recursoFoto.update({ fotoId: foto._id }, foto
            , function () {
              resolve({
                msg: 'Foto ' + foto.titulo + ' atualizada com sucesso.'
                , inclusao: false
              });
            }, function (err) {
              console.log(err);
              reject({
                msg: 'Não foi possível alterar a foto ' + foto.titulo + '.'
              });
            });
        } else {
          recursoFoto.save(foto
            , function () {
              resolve({
                msg: 'Foto ' + foto.titulo + ' incluida com sucesso.'
                , inclusao: true
              });
            }, function (err) {
              console.log(err);
              reject({
                msg: 'Não foi possível adicionar a foto ' + foto.titulo + '.'
              });
            });
        }
      });
    }
  }
})();
