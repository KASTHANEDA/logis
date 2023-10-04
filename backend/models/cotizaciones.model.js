import mongoose from "mongoose";

const cotSchema = mongoose.Schema(
    {
        idCot: {
          type: Number,
          require: true
        },
        Cliente: {
          type: String,
          require: true
        },
        Modalidad: {
          type: String,
          require: true
        },
        CiudadOrigen: {
          type: String,
          require: true
        },
        DireccionOrigen: {
          type: String,
          require: true
        },
        CiudadDestino: {
          type: String,
          require: true
        },
        DireccionDestino: {
          type: String,
          require: true
        },
        Asunto: {
          type: String,
          require: true
        },
        ClaseMatId: {
          type: Number,
          require: true
        },
        TipoNegocio: {
          type: String,
          require: true
        },
        ModoTransporte: {
          type: String,
          require: true
        },
        TerminosNegociacion: {
          type: String,
          require: true
        },
        EstadoColor: {
          type: String,
          require: true
        },
        diasTransito: {
          type: Number,
          require: true
        },
        VigenciaOferta: {
          type: String,
          require: true
        },
        ValorDeclarado: {
          type: Number,
          require: true
        },
        valorCif: {
          type: Number,
          require: true
        },
        ValorCifCalculado: {
          type: Number,
          require: true
        },
        TotalGastosOrigen: {
          type: Number,
          require: true
        },
        moneda: {
          type: String,
          require: true
        },
        trm: {
          type: Number,
          require: true
        },
        factorEuroDollar: {
          type: Number,
          require: true
        },
        descripcionMercancia: {
          type: String,
          require: true
        },
        fechaCreacion: {
          type: String,
          require: true
        },
        fechaModificacion: {
          type: String,
          require: true
        },
        PaisOrigen: {
          type: String,
          require: true
        },
        PaisDestino: {
          type: String,
          require: true
        },
        fechaProximaRevision: {
          type: String,
          require: true
        },
        idProveedores: {
          type: Number,
          require: true
        },
        Servicios: {
          type: String,
          require: true
        },
        estado: {
          type: String,
          require: true
        },
        comercial: {
          type: String,
          require: true
        }
      }
      
) ;

export default mongoose.model('cotizaciones',cotSchema) ;