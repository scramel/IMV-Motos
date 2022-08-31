<template>
  <div class="home">
    <BackgroundTop :background="'bg-1.jpg'" style="max-height: 16rem;">
      <NavBar/>
      <b-container class="py-5 text-center">
        <h1 class="text-white font-weight-bold text-uppercase">Marcas, productos y logística</h1>
      </b-container>
    </BackgroundTop>
    <SupportedBrandsComponent/>
    <div class="bg-img">
      <div class="bg-img--space">
        <div class="bg-img--overlay"></div>
      </div>
    </div>
    <b-container class="available-products text-center">
      <h2>Productos disponibles</h2>
      <p>Dentro de la gama de productos que ofrecemos están:</p>
      <b-row>
        <ImageButtonComponentAlt v-for="(imageButton, index) in imageButtons" :key="index" :title="imageButton.title" :img="imageButton.img" />
      </b-row>
    </b-container>
    <AvailableProductsComponent :products="products"/>
    <FooterComponent/>
  </div>
</template>

<script>
import BackgroundTop from '@/components/BackgroundTop.vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'
import SupportedBrandsComponent from '@/components/SupportedBrands.vue'
import AvailableProductsComponent from '@/components/AvailableProducts.vue'
import ImageButtonComponentAlt from '@/components/ImageButtonAlt.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    BackgroundTop,
    FooterComponent,
    SupportedBrandsComponent,
    AvailableProductsComponent,
    ImageButtonComponentAlt
  },
  data() {
    return {
      products: [{
        title: 'Logística y Gestión Operativa',
        description: 'En IMV tenemos un equipo dedicado a monitorear todos los aspectos relativos a la cadena de valor para garantizar eficiencia en la logística y gestión operativa en el proceso de distribución.<br><br>Hemos construido una relación directa con los fabricantes, con quienes trabajamos de la mano en la supervisión del proceso de fabricación, pruebas, despacho y garantía. Tenemos herramientas tecnológicas que permiten informar oportunamente a nuestros clientes sobre el estatus de sus órdenes, no solo en su trayecto internacional para la importación sino también en la distribución nacional hasta el destino final de sus repuestos.',
        img: 'img-3'
      }, {
        title: 'Propuesta económicamente competitiva',
        description: 'Ofrecemos los mejores precios del mercado, sin comprometer la calidad de nuestros productos y servicios. Nuestra relación directa con los fabricantes y la eficiencia que demostramos día a día en el manejo logístico de nuestra distribución, nos permiten mantener una estructura financiera solida al tiempo que presentamos la oferta más competitiva del mercado.',
        img: 'img-4'
      }],
      imageButtons: [{
        img: 'img-7.jpg',
        title: 'Partes mecánicas'
      }, {
        img: 'img-8.jpg',
        title: 'Partes eléctricas'
      }, {
        img: 'img-9.jpg',
        title: 'Accesorios'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .available-products {
    color: white;
  }
  .bg-img {
    z-index: -1;
    position: relative;
    margin-top: 5vh;
    &--space {
      filter: contrast(1.15) brightness(1.15);
      z-index: 1;
      top: -8vh;
      width: 100%;
      height: 50vh;
      overflow: hidden;
      position: absolute;

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: linear-gradient(to bottom, #f48321ee, #f48321ee), url('../../src/assets/images/bg-2.jpg');
      background-blend-mode: multiply;
    }
    &--overlay {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, #f48321a8, #f48321a8);
    }
    img {
      z-index: -1;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
