<script setup>
import CreacionFacturaVue from './components/CreacionFactura.vue';
import Login from './components/Login.vue'
import DisplayFacturasVue from './components/DisplayFacturas.vue';
</script>

<template>
  <CreacionFacturaVue/>
  <DisplayFacturasVue/>
</template>

<style lang="scss">
body {
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 16%, rgba(92,9,121,1) 100%, rgba(0,0,0,1) 100%);
  margin: 0;
};

</style>