const mongoose = require('mongoose')


const FacturaSchema = new mongoose.Schema({
    CodigoReferencia: String, 
    Nombre: String,
    Apellido: String,
    Cedula: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: false,
        default: 'Ninguno'
    },
    NumeroCel: {
        type: String,
        required: true
    },
    Telefono: {
        Marca: String,
        Modelo: String,
    },
    IMEI: {
        type: String,
        required: true
    },
    Falla_Declarada: {
        type: String,
        required: true
    },
    Observaciones: {
        type: String,
        required: true
    },
    Pago: {
        Revision: String,
        Reparacion: String,
        Pendiente: {
            type: String,
            required: false,
            default: 'Nada'
        },
        Total: String
    },
    Fechas: {
        Recepcion: {
            type: String,
            required: true,
        },
        Entrega: {
            type: Date,
            required: false,
            default: null
        }
    }

});


const Factura = mongoose.model('Factura', FacturaSchema)

module.exports = Factura