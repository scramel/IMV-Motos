<template>
  <div class="home">
    <BackgroundTop :background="'bg-1.jpg'" style="max-height: 16rem;">
      <NavBar/>
      <b-container class="py-5 text-center">
        <h1 class="text-white font-weight-bold text-uppercase">Acerca de IMV Motos</h1>
      </b-container>
    </BackgroundTop>
    <ProductInfoComponent :info="info"/>
    <FooterComponent/>
  </div>
</template>

<script>
import BackgroundTop from '@/components/BackgroundTop.vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'
import ProductInfoComponent from '@/components/ProductInfo.vue'
// import SupportedBrandsComponent from '@/components/SupportedBrands.vue'
// import AvailableProductsComponent from '@/components/AvailableProducts.vue'
// import ImageButtonComponent from '@/components/ImageButton.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    BackgroundTop,
    FooterComponent,
    ProductInfoComponent
  },
  data() {
    return {
      info: {
        img: 'img-6',
        title: 'Somos una empresa especializada en la distribución de Repuestos, Partes y Piezas de las principales marcas de motocicletas que circulan en Latinoamérica.',
        description: 'Con más de 10 años de experiencia en el sector, hemos logrado consolidar una propuesta de servicio integral que combina los mejores productos, con la más amplia asesoría y un servicio postventa sin igual.<br><br>Nuestro equipo de especialistas acompaña a nuestros clientes por todo lo largo de la cadena de valor, previo el análisis de sus requerimientos y necesidades, para ensamblar la mejor propuesta y entregar los mejores productos con una logística eficiente, transparente y al mejor costo.<br><br>Además de nuestra amplia gama de productos, nuestro servicio al cliente es insuperable en la industria de la motocicleta. Hemos reunido cuidadosamente a un talento humano formando el mejor equipo, experto y comprometido, para colocarlo al servicio de la industria.'
      }
    }
  }
}
</script>
