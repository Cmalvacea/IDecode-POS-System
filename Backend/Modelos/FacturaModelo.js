const mongoose = require('mongoose')


const FacturaSchema = new mongoose.Schema({
    CodigoReferencia: String, 
    Nombre: String,
    Apellido: String,
    Cedula: {
        type: String,
        required: true
    },
    Email: String,
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
        Pendiente: String,
        Total: String
    }

})


const Factura = mongoose.model('Factura', FacturaSchema)

module.exports = Factura