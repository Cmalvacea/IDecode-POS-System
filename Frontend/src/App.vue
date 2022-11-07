<template>
  <form action="" method="post" @submit.prevent="CrearFactura">
    <div>
      <h2>Cliente</h2>
      <input type="text" name="" id="" v-model="Formulario.name">
      <input type="text" name="" id="" v-model="Formulario.lastname">
      <input type="text" v-model="Formulario.ci">
      <input type="text" name="" id="" v-model="Formulario.email">
    </div>
    <div>
      <h2>Telefono</h2>
      <input type="text" name="" id="" v-model="Formulario.marca">
      <input type="text" v-model="Formulario.model">
      <input type="text" name="" id="" v-model="Formulario.imei">
      <input type="text" name="" id="" v-model="Formulario.falla">
      <textarea name="" id="" cols="30" rows="10" v-model="Formulario.obs"></textarea>
    </div>
    <div>
      <h2>Pago</h2>
      <input type="text" v-model="Formulario.rev">
      <input type="text" v-model="Formulario.rep">
      <input type="text" v-model="Formulario.pen">
      <input type="text" v-model="Formulario.total">
    </div>
    <div></div>
    <button>Crear</button>
    <div></div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      Formulario: {
        CodigoReferencia: '',
        name: '',
        lastname: '',
        ci: '',
        email: '',
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
  methods: {
    CrearFactura() {
      var formulario = this.Formulario
      axios.post('http://localhost:3000/Factura', formulario).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log('Error')
        console.log(err)
      })
    }
  }
}


</script>

<style lang="scss">
body {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 16%, rgba(92,9,121,1) 100%, rgba(0,0,0,1) 100%);
  margin: 0;
};

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

</style>