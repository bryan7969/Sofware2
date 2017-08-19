/**
 * CategoriaController
 *
 * @description :: Server-side logic for managing Categorias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  inicioEventos: function(req,res) {

    var parametros = req.allParams();

    Categoria.find().exec(
      function (err, categoriaEncontradas) {
        if (err) {
          return res.serverError(err);
        } else {
          return res.view('inicioEventos', {categorias: categoriaEncontradas})
        }

      })
  }


};

