const Factura = require('../Modelos/FacturaModelo')

const FacturaServicio = {
    CrearFactura(req, res) {
        const NewFactura = new Factura({
            CodigoReferencia: 'HEWW',
            Nombre: req.body.name,
            Apellido: req.body.lastname,
            Cedula: req.body.ci,
            Email: req.body.email,
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
        })
        NewFactura.save((err) => {
            if(err) {
                throw err;
                res.send('Error durante la operacion')
            }
            res.send('Registro creado con éxito')
        })
    }
}

module.exports = FacturaServicio