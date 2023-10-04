import mongoose from mongoose;

const userSchema = mongoose.Schema(
    {
        idOpe: {
          type: Number,
          require: true
        },
        idLQ: {
          type: Number
        },
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
          type: String
        },
        CiudadDestino: {
          type: String,
          require: true
        },
        DireccionDestino: {
          type: String
        },
        Asunto: {
          type: String,
          require: true
        },
        ClaseMatId: {
          type: String,
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
          type: String
        },
        diasTransito: {
          type: Number
        },
        VigenciaOferta: {
          type: Date
        },
        ValorDeclarado: {
          type: Number,
          require: true
        },
        moneda: {
          type: String,
          require: true
        },
        trm: {
          type: Number
        },
        factorEuroDollar: {
          type: Number
        },
        descripcionMercancia: {
          type: String,
          require: true
        },
        fechaCreacion: {
          type: Date,
          require: true
        },
        fechaModificacion: {
          type: Date
        },
        fechaSalida: {
          type: Date
        },
        fechaArribo: {
          type: Date
        },
        fechaLiberacion: {
          type: Date
        },
        PaisOrigen: {
          type: String
        },
        PaisDestino: {
          type: String
        },
        fechaProximaRevision: {
          type: Date
        },
        idProveedores: {
          type: String
        },
        Servicios: {
          type: String
        },
        totalPesoVolumetrico: {
          type: Number
        },
        totalPesoTotal: {
          type: Number
        },
        totalVolumenM3: {
          type: Number
        },
        valorCIF: {
          type: Number
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

export default mongoose.model('operaciones',userSchema) ;