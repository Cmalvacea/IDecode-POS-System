<script setup>
import CreacionFacturaVue from './components/CreacionFactura.vue';
import Login from './components/Login.vue'
import DisplayFacturasVue from './components/DisplayFacturas.vue';
</script>

<template>
  <div v-if="Status == 'Login'">
    <Login :StartFunction="DisplayFacturas" />
  </div>
  <div v-if="Status == 'DisplayF'" class="TotalContainer">
    <DisplayFacturasVue/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Status: 'DisplayF'
    }
  },
  methods: {
    DisplayFacturas() {
      this.Status = 'DisplayF'
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


.TotalContainer {
  display: flex;
  flex-direction: column;

  .FacturaHandlerContainer {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
}

</style>