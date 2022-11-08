const Factura = require('../Modelos/FacturaModelo')
const {customAlphabet} = require('nanoid')
const FIDGEN = customAlphabet('ABCDEFGHIJKLMNÑOPRSTUVQWXYZ123456789', 9)
const DateBase = new Date()
const FechaFormato = `${DateBase.getFullYear()}-${DateBase.getMonth() + 1}-${DateBase.getDay()}`

const FacturaServicio = {
    TraerFacturas(req, res) {
        Factura.find().then(data => {
            if(!data) {
                res.send('No hay facturas disponibles')
            } else {
                res.send(data)
            }
        }).catch(Err => {
            res.send('Error durante la operacion')
        })
    },

    TraerFacturaIndividual(req, res) {
        const Query = req.params.ref 
        Factura.findOne({'CodigoReferencia': Query}).then(Data => {
            if(!Data) {
                console.log(Data)
                res.send('No hay facturas con este código')
            } else {
                res.send(Data)
            }
        }).catch(Err => {
            console.log(Err)
            res.send(Err)
        })
    },


    CrearFactura(req, res) {
        const NewFactura = new Factura({
            CodigoReferencia: FIDGEN(),
            Nombre: req.body.name,
            Apellido: req.body.lastname,
            Cedula: req.body.ci,
            Email: req.body.email,
            NumeroCel: req.body.cell,
            Telefono: {
                Marca: req.body.marca,
                Modelo: req.body.model
            },
            IMEI: req.body.imei,
            Falla_Declarada: req.body.falla,
            Observaciones: req.body.obs,
            Pago: {
                Revision: req.body.rev,
                Reparacion: req.body.rep,
                Pendiente: req.body.pen,
                Total: req.body.total
            },
            Fechas: {
                Recepcion: FechaFormato
            }
        })
        NewFactura.save((err) => {
            if(err) {
                throw err;
                res.send('Error durante la operacion')
            }
            res.send('Registro creado con éxito')
        })
    },

    ActualizarFactura(req, res) {
        const Actualizacion = {
            CodigoReferencia: req.body.CodigoReferencia,
            Nombre: req.body.name,
            Apellido: req.body.lastname,
            Cedula: req.body.ci,
            Email: req.body.email,
            NumeroCel: req.body.cell,
            Telefono: {
                Marca: req.body.marca,
                Modelo: req.body.model
            },
            IMEI: req.body.imei,
            Falla_Declarada: req.body.falla,
            Observaciones: req.body.obs,
            Pago: {
                Revision: req.body.rev,
                Reparacion: req.body.rep,
                Pendiente: req.body.pen,
                Total: req.body.total
            }
        }
        Factura.updateOne({'CodigoReferencia': req.body.CodigoReferencia}, Actualizacion, {new: true}).then(Data => {
            console.log(Data)
            res.send('Actualizado correctamente')
        }).catch(Err => {
            console.log(Err)
            res.send('Hubo un error durante la operación, por favor intentelo de nuevo')
        })
    }
}

module.exports = FacturaServicio