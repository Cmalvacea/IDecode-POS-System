<template>
    <div class="LockScreen" v-show="DisplayUpdate">
    <form action="" method="post" @submit.prevent="ActualizarFactura">
      <div>
        <h2>Cliente</h2>
        <input type="text" required placeholder="Nombres" name="" id="" v-model="Formulario.name">
        <input type="text" required placeholder="Apellidos" name="" id="" v-model="Formulario.lastname">
        <input type="text" required placeholder="Cédula de identidad" v-model="Formulario.ci">
        <input type="text"  placeholder="Correo eletrónico (Opcional)" name="" id="" v-model="Formulario.email">
        <input type="text" required placeholder="Número de telefono (Obligatorio)" name="" id="" v-model="Formulario.cell">
      </div>
      <div>
        <h2>Telefono</h2>
        <input type="text" required placeholder="Marca" name="" id="" v-model="Formulario.marca">
        <input type="text" required placeholder="Modelo" v-model="Formulario.model">
        <input type="text" required placeholder="IMEI (obligatorio)" name="" id="" v-model="Formulario.imei">
        <input type="text" required placeholder="Falla declarada" name="" id="" v-model="Formulario.falla">
        <textarea name="" placeholder="Observaciones" id="" cols="30" rows="10" v-model="Formulario.obs"></textarea>
      </div>
      <div>
        <h2>Pago</h2>
        <input type="text" required placeholder="Revisión" v-model="Formulario.rev">
        <input type="text" required placeholder="Reparación" v-model="Formulario.rep">
        <input type="text"  placeholder="Pendiente" v-model="Formulario.pen">
        <input type="text" required placeholder="Total" v-model="Formulario.total">
      </div>
      <div></div>
      <button>Crear</button>
      <div></div>
      <div></div>
      <button @click="DisplayUpdate = false">Cancelar</button>
      <div></div>
    </form>
    </div>


    <div class="ListaFacturas">
        <div class="ListaFacturaReferencia">
            <div>Código de referencia</div>
            <div>Nombres</div>
            <div>Detalles del equipo</div>
            <div>Falla</div>
            <div>Fecha de recepción</div>
        </div>
        <div class="Factura" v-for="f in Facturas" @click="TraerUnaFactura(f.CodigoReferencia)">
            <div>
                {{f.CodigoReferencia}}
            </div>
            <div>
                {{f.Nombre}}
                {{f.Apellido}}
            </div>
            <div>
                {{f.Telefono.Marca}}
                {{f.Telefono.Modelo}}
            </div>
            <div>
                {{f.Falla_Declarada}}
            </div>
            <div>
                {{f.Fechas.Recepcion}}
            </div>
        </div>
    </div>
</template>

<script>
import axios, { Axios } from 'axios';

export default {
    data() {
        return {
            Facturas: [],
            DisplayUpdate: false,
            Formulario: {
                CodigoReferencia: '',
                name: '',
                lastname: '',
                ci: '',
                email: '',
                cell: '',
                marca: '',
                model: '',
                imei: '',
                falla: '',
                obs: '',
                rev: '',
                rep: '',
                pen: '',
                total: ''
            }
        }
    },
    beforeMount() {
        this.TraerFacturas()
    },
    methods: {
        TraerFacturas() {
            axios.get('http://localhost:3000/Facturas').then(Res => {
                console.log(Res.data)
                this.Facturas = Res.data
            }).catch(err => {
                alert(err.data)
                console.log(err)
            })
        },
        TraerUnaFactura(arg) {
            axios.get(`http://localhost:3000/Factura/${arg}`).then(Res => {
                const Data = Res.data
                this.DisplayUpdate = true
                this.Formulario.CodigoReferencia = Data.CodigoReferencia
                this.Formulario.name = Data.Nombre
                this.Formulario.lastname = Data.Apellido
                this.Formulario.cell = Data.NumeroCel
                this.Formulario.email = Data.Email
                this.Formulario.ci = Data.Cedula
                this.Formulario.marca = Data.Telefono.Marca
                this.Formulario.model = Data.Telefono.Modelo
                this.Formulario.imei = Data.IMEI
                this.Formulario.falla = Data.Falla_Declarada
                this.Formulario.obs = Data.Observaciones
                this.Formulario.rev = Data.Pago.Revision
                this.Formulario.rep = Data.Pago.Reparacion
                this.Formulario.pen = Data.Pago.Pendiente
                this.Formulario.total = Data.Pago.Total
            }).catch(Err => {
                alert('Esta factura no existe o hubo un error durante la operación, por favor recargue la página')
                console.log(Err)
            })
        },
        ActualizarFactura() {
            axios.put('http://localhost:3000/Factura', this.Formulario).then(res => {
                alert(res.data)
                this.DisplayUpdate = false
            }).catch(Err => {
                alert(Err)
                console.log(Err)
            })
        }
    }
}

</script>

<style lang="scss">

.LockScreen {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    form {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 33%);
    gap: 25px;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #020024;
    margin: auto;
    margin-top: 6%;
    background-color: white;
    padding: 15px;
  
    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      h2 {
        align-self: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    }
  
    button {
      font-size: 1.2em;
      margin-top: 10px;
      padding: 15px 0px 15px 0px;
      background-color: green;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  
    input {
      margin-top: 10px;
      border-radius: 10px;
      padding: 6px;
      outline: none;
      border: 1px solid gainsboro;
      padding: 20px 0px 20px 25px;
      font-size: 1.2em;
      width: 90%;
    }
  
    textarea {
      width: 90%;
      margin-top: 10px;
      border-radius: 10px;
      border: 1px solid gainsboro;
      outline: none;
      padding: 20px 0px 20px 25px;
      font-size: 1.1em;
    }
  }
}

.ListaFacturaReferencia {
    display: grid;
    grid-template-columns: 10% 20% 20% 30% 20%;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.ListaFacturas {
    background-color: white;
    .Factura {
        :hover{
            background-color: red;
            cursor: pointer;
        }
        display: grid;
        grid-template-columns: 10% 20% 20% 30% 20%;
        div {
            border: 1px solid black;
            padding: 10px;
            display: flex;
            align-items: center;
        }
    }
}


</style>