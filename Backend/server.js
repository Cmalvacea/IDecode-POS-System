const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const Factura = require('./Modelos/FacturaModelo')
const FacturaServicio = require('./Servicios/FacturaServicios')
const Port = process.env.PORT || 4000
const DB_URI = process.env.DB_URI

async function Connection() {
    try {
        await mongoose.connect("mongodb://localhost:27017/IDecode")
        console.log('Conexion a base de datos segura')
    } catch (error) {
        console.log('Error fatal')
        process.exit()
    }
}

Connection()

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))



app.post('/Factura', FacturaServicio.CrearFactura)
app.put('/Factura', FacturaServicio.ActualizarFactura)
app.get('/Facturas', FacturaServicio.TraerFacturas)
app.get('/Factura/:ref', FacturaServicio.TraerFacturaIndividual)








app.listen(Port, () => {
    console.log(`Listening at ${Port}`)
})
