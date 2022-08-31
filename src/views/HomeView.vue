<template>
  <div class="home">
    <BackgroundTop :background="'bg-1.jpg'">
      <NavBar/>
      <b-container class="py-5">
        <b-row>
          <b-col lg="8" class="text-white">
            <h1 class="text-white font-weight-bold text-uppercase">REPUESTOS DE CALIDAD AL<br>MEJOR PRECIO DEL<br>MERCADO</h1>
            <br>
            <p>Nuestro propósito es estar a disposición de nuestros clientes en todos los rincones de la geografía nacional, con opciones de alta calidad y buen precio para sus necesidades de partes y piezas mecánicas.</p>
            <router-link :to="{ name: 'brands' }" class="btn btn-tertiary mt-4" tag="button">Conozca nuestras marcas →</router-link>
          </b-col>
        </b-row>
      </b-container>
    </BackgroundTop>
    <div class="home-motorcycle">
      <img src="../../src/assets/images/transparent-1.png" alt="Motorcycle">
    </div>
    <ProductInfoComponent :info="info"/>
    <SupportedBrandsComponent/>
    <BackgroundTop :background="'bg-2.jpg'">
      <b-container class="py-5">
        <b-row>
          <b-col lg="8" class="text-white">
            <h1 class="text-white font-weight-bold text-uppercase">Productos disponibles</h1>
            <br>
            <p>Dentro de la gama de productos que ofrecemos están:</p>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <ImageButtonComponent :img="'img-7.jpg'"/>
          <ImageButtonComponent :img="'img-8.jpg'"/>
          <ImageButtonComponent :img="'img-9.jpg'"/>
        </b-row>
      </b-container>
    </BackgroundTop>
    <div class="home-motorcycle-2">
      <img src="../../src/assets/images/transparent-2.png" alt="Motorcycle">
    </div>
    <AvailableProductsComponent :products="products"/>
    <FooterComponent/>
  </div>
</template>

<script>
import BackgroundTop from '@/components/BackgroundTop.vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'
import ProductInfoComponent from '@/components/ProductInfo.vue'
import SupportedBrandsComponent from '@/components/SupportedBrands.vue'
import AvailableProductsComponent from '@/components/AvailableProducts.vue'
import ImageButtonComponent from '@/components/ImageButton.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    BackgroundTop,
    FooterComponent,
    ProductInfoComponent,
    SupportedBrandsComponent,
    AvailableProductsComponent,
    ImageButtonComponent
  },
  data() {
    return {
      info: {
        img: 'img-5',
        title: 'Somos una empresa especializada en la distribución de Repuestos, Partes y Piezas de las principales marcas de motocicletas que circulan en Latinoamérica.',
        description: 'Somos una empresa especializada en la distribución de Repuestos, Partes y Piezas de las principales marcas de motocicletas que circulan por nuestro país.<br><br>Con más de 10 años de experiencia en el sector, hemos logrado consolidar una propuesta de servicio integral que combina los mejores productos, con la más amplia asesoría y un servicio postventa sin igual.',
        button: 'Conoce más',
        link_to: 'about'
      },
      products: [{
        title: 'Alcance Geográfico',
        description: 'Nuestro alcance territorial es una de nuestras mayores fortalezas. Con oficinas operativas en Venezuela, Panamá y China, contamos con la capacidad de gestionar todos los aspectos de nuestra empresa, a nivel global.',
        button: 'Leer más',
        img: 'img-1',
        link_to: 'about'
      }, {
        title: 'Aliados de Negocio',
        description: 'IMV dispone de planes de alianza para comercializadores a nivel nacional. Estos planes tienen como objetivo establecer relaciones de negocio productivas para vendedores locales, talleres mecánicos y demás puntos de venta al por menor.',
        button: 'Conviértase en aliado',
        img: 'img-2',
        link_to: 'contact'
      }]
    }
  }
}
</script>

<style lang="scss">
  .home-motorcycle {
    position: relative;
    img {
      position: absolute;
      z-index: 2;
      right: 0;
      height: 19rem;
      bottom: -4rem;
      @media only screen and (min-width: 1200px) {
        bottom: -7rem;
        height: 33rem;
      }
      @media only screen and (max-width: 600px) {
        opacity: 0;
      }
    }
  }
  .home-motorcycle-2 {
    position: relative;
    img {
      position: absolute;
      z-index: 2;
      left: 0;
      height: 19rem;
      bottom: -4rem;
      @media only screen and (min-width: 1200px) {
        bottom: -4rem;
        height: 36rem;
      }
      @media only screen and (max-width: 600px) {
        opacity: 0;
      }
    }
  }
</style>
