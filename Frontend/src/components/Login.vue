<template>
    <form action="">
        <input type="text" name="" id="" placeholder="Usuario" v-model="Usuario.Nombre">
        <input type="text" name="" id="" placeholder="Contraseña" v-model="Usuario.Contraseña">
        <button>Ingresar</button>
    </form>
</template>

<script>

export default {
    data() {
        return {
            Usuario: {
                Nombre: '',
                Contraseña: ''
            }
        }
    }
}

</script>

<style lang="scss">
  
  form {
    width: 20%;
    display: flex;;
    flex-direction: column;
    gap: 25px;
    border-radius: 10px;
    box-shadow: 4px 4px 4px #020024;
    margin: auto;
    margin-top: 12%;
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
  
</style>