/**
 * EventoController
 *
 * @description :: Server-side logic for managing Eventoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearEvento: function (requisito,resultado){
    var parametros = requisito.allParams();
    sails.log.info("Parametros",parametros);

    //declaracion de variables para el rigistro de un nuevo evento, ademas de caragr las variables
    //que deben ingresarse en la base de datos
    var nuevoEvento = {
      nombreEvento:parametros.nombreEvento,
      fechaEvento:parametros.fechaEvento,
      horaInicio:parametros.horaInicio,
      horaFin:parametros.horaFin,
      detalleEvento:parametros.detalleEvento,
      precio:parametros.precio,
      nombreLugar:parametros.nombreLugar,
      direccion:parametros.direccion,
      latitud:parametros.latitud,
      longitud:parametros.longitud,
      imagenEvento:parametros.imagenEvento,
      fkIdCategoria:parametros.fkIdCategoria,
      fkIdOrganizador:parametros.fkIdOrganizador,
      fkIdTipoEvento:parametros.fkIdTipoEvento

    };

    Evento.create(nuevoEvento).exec(function(error, eventoCreado){
      if(error){
        return resultado.serverError(error);
      }
      else{
        return resultado.redirect("/");
      }
    });

  },

  //aqui podremos observar el detalle del resultado del registro del evento
  detalleEvento: function (requisito, resultado) {
    var parametros = requisito.allParams();
    if (parametros.id) {
      Evento.findOne({
        id: parametros.id
      })
        .exec(function (err, eventoEncontrado) {
          if (err)
            return resultado.serverError(err);
          if (eventoEncontrado) {
            //Si encontro
            return resultado.view('detalleEvento', {
              evento: eventoEncontrado
            });
          }
          else {
            //No encontro
            return resultado.redirect('/inicio');
          }
        });
    }
    else {
      return resultado.redirect('/crearUsuario');
    }
  }





};

