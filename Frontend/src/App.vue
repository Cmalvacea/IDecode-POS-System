<template>
  <form action="" method="post">
    <input type="text" placeholder="Correo electrónico">
    <input type="text" placeholder="Nombre">
    <input type="text" placeholder="Apellido">
    <input type="text" name="" id="" placeholder="Número de teléfono">
    <input type="text" name="" id="" placeholder="IMEI del dispositivo">
    <textarea name="" id="" cols="30" rows="10" placeholder="Observaciones"></textarea>
    <button>Enviar</button>
  </form>
</template>

<style lang="scss">
body {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 16%, rgba(92,9,121,1) 100%, rgba(0,0,0,1) 100%);
  margin: 0;
};

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  border-radius: 10px;
  box-shadow: 4px 4px 4px #020024;
  margin: auto;
  margin-top: 6%;
  background-color: white;
  padding: 15px;

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

  }

  textarea {
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid gainsboro;
    outline: none;
    padding: 20px 0px 20px 25px;
    font-size: 1.1em;
  }
}

</style>