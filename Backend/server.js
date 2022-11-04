const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const Factura = require('./Modelos/FacturaModelo')
const Port = process.env.PORT || 4000
const DB_URI = process.env.DB_URI

async function Connection() {
    try {
        await mongoose.connect(DB_URI)
        console.log('Conexion a base de datos segura')
    } catch (error) {
        console.log('Error fatal')
        process.exit()
    }
}









app.listen(Port, () => {
    console.log(`Listening at ${Port}`)
})
