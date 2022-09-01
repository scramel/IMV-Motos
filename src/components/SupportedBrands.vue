<template>
  <section class="mx-auto p-5" style="background-color: white;">
    <h2 class="text-center pt-5">MARCAS SOPORTADAS</h2>
    <p class="text-center p-3">Tenemos opciones de repuestos, partes y piezas de las principales marcas de circulación en nuestro país.</p>
    <b-row class="justify-content-around pt-2 w-75 mx-auto">
      <img class="pb-5" v-for="(brand, index) in brands" :key="index" :src="require(`../../src/assets/images/brand-${index+1}.png`)" :alt="brand">
    </b-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      brands: ['Empire Keeway', 'Bera Motorcycles', 'Honda', 'Suzuki', 'Yamaha']
    }
  }
}
</script>
