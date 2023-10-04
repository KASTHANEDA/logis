import express from "express";
import cotSchema from "../models/cotizaciones.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

//Voy a crear mi usuario
router.post('/cotizaciones', (require, response) => {
    const coti = cotSchema(require.body);
    coti
    .save()
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

// post registro usuario

router.post("/AddCotizaciones1",  (require, response) => {
    const coti = cotSchema(require.body);
    coti
      .save()
      .then((data) => response.json(data))
      .catch((error) => response.json({ message: error }));
  });


  router.post("/register", (require, response) => {
    const coti = cotSchema(require.body);
    coti
      .save()
      .then((data) => response.json(data))
      .catch((error) => response.json({ message: error }));
  });

//Voy a crear mi arreglo de usuarios
router.post('/cotizacionesMany', (require, response) => {
    const cotizacion = require.body;
    cotSchema.insertMany(cotizacion)
    .then((data) => response.json(data))
    .catch((error)=> response.json({ message: error }))
});

//Traer todos los usuarios
router.get('/cotizaciones', (require, response) => {
   cotSchema
   .find()
   .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))

});
router.get('/cotizaciones/:id', (require, response) =>{
    const { id } = require.params;
    cotSchema.findById(id)
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

//Actualizar usuario
router.put('/cotizaciones/:id', (require, response) =>{
    const { id } = require.params;
    const { idCot, Cliente, Modalidad, CiudadOrigen, DireccionOrigen, CiudadDestino, DireccionDestino, Asunto, ClaseMatId, TipoNegocio, ModoTransporte, TerminosNegociacion, EstadoColor, diasTransito, VigenciaOferta, ValorDeclarado, valorCif, ValorCifCalculado, TotalGastosOrigen, moneda, trm, factorEuroDollar, descripcionMercancia, fechaCreacion, fechaModificacion, PaisOrigen, PaisDestino, fechaProximaRevision, idProveedores, Servicios, estado, comercial  } = require.body;
    cotSchema.updateOne({ _id: id }, {$set:{ idCot, Cliente, Modalidad, CiudadOrigen, DireccionOrigen, CiudadDestino, DireccionDestino, Asunto, ClaseMatId, TipoNegocio, ModoTransporte, TerminosNegociacion, EstadoColor, diasTransito, VigenciaOferta, ValorDeclarado, valorCif, ValorCifCalculado, TotalGastosOrigen, moneda, trm, factorEuroDollar, descripcionMercancia, fechaCreacion, fechaModificacion, PaisOrigen, PaisDestino, fechaProximaRevision, idProveedores, Servicios, estado, comercial }})
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

//Eliminar usuario
router.delete('/cotizaciones/:id', (require, response) =>{
    const { id } = require.params;
    cotSchema.deleteOne({ _id: id })
    .then((data) => response.json(data))
   .catch((error)=> response.json({ message: error }))
});

export default router;