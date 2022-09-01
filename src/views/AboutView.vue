<template>
  <div class="home">
    <BackgroundTop :background="'bg-1.webp'">
      <NavBar/>
      <b-container class="py-5 text-center">
        <h1 class="text-white font-weight-bold text-uppercase">Acerca de IMV Motos</h1>
      </b-container>
    </BackgroundTop>
    <ProductInfoComponent :info="info"/>
    <div class="helmet-1">
      <img :src="require(`../../src/assets/images/transparent-3.webp`)" alt="Image">
    </div>
    <div class="about-view-purpose">
      <div class="about-view-bgimg">
        <div class="about-view-bgimg--space">
          <div class="about-view-bgimg--overlay"></div>
        </div>
      </div>
      <b-container class="py-5" style="position: relative;">
        <b-col>
          <h2 class="pt-5">Nuestro propósito</h2>
          <p class="m-0 w-75 pb-5">Ser la referencia nacional e internacional en calidad y eficiencia en la distribución de repuestos de Motocicletas. Estar a disposición de nuestros clientes en todos los rincones de la geografía nacional, con opciones de alta calidad y buen precio para sus necesidades de partes y piezas mecánicas.</p>
          <img class="helmet-2" :src="require(`../../src/assets/images/transparent-3.webp`)" alt="Image">
        </b-col>
      </b-container>
    </div>
    <div class="text-center p-5" style="background-color: white;">
      <b-container>
        <b-col>
          <h2>Política de calidad</h2>
          <h4>El pilar de una buena experiencia</h4>
          <br>
          <p>Nuestra política de gestión de calidad se define como el marco de procesos, prácticas y planes que hemos implementado para garantizar que la experiencia de relación en la preventa, venta y postventa sea totalmente satisfactoria y cumpla con las expectativas de nuestros clientes.</p>
          <br>
          <p>Existen tres condiciones que dan fe de nuestro compromiso con la Política de Calidad:</p>
          <br>
          <b-row class="text-center mx-auto" align-h="around">
            <QualityPoliticsComponent v-for="(politic, index) in qualityPolitics" :key="index" :text="politic" :index="index+1"/>
          </b-row>
          <br>
          <p>Sumado a esto, seguimos un proceso de mejora continua, alineado con el propósito de la empresa. Todos nuestros productos pasan por una minuciosa revisión de calidad, pruebas y certificación que soporta la garantía de nuestra marca.</p>
        </b-col>
      </b-container>
    </div>
    <b-container class="p-5">
      <b-card-group deck>
        <b-card v-for="(card, index) in cards" :key="index"
          :title="card.title"
          :img-src="require(`../../src/assets/images/${card.img}.webp`)"
          img-alt="Image"
          img-top
          tag="article">
          <b-card-text>
            <small>{{ card.description }}</small>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>
    <div class="pb-5" style="background-color: var(--light);">
      <b-container class="text-center">
        <router-link :to="{ name: 'contact' }" class="btn btn-tertiary my-4" tag="button">Contáctenos para más información →</router-link>
      </b-container>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import BackgroundTop from '@/components/BackgroundTop.vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'
import ProductInfoComponent from '@/components/ProductInfo.vue'
import QualityPoliticsComponent from '@/components/QualityPolitics.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    BackgroundTop,
    FooterComponent,
    ProductInfoComponent,
    QualityPoliticsComponent
  },
  data() {
    return {
      info: {
        img: 'img-6',
        title: 'Somos una empresa especializada en la distribución de Repuestos, Partes y Piezas de las principales marcas de motocicletas que circulan en Latinoamérica.',
        description: 'Con más de 10 años de experiencia en el sector, hemos logrado consolidar una propuesta de servicio integral que combina los mejores productos, con la más amplia asesoría y un servicio postventa sin igual.<br><br>Nuestro equipo de especialistas acompaña a nuestros clientes por todo lo largo de la cadena de valor, previo el análisis de sus requerimientos y necesidades, para ensamblar la mejor propuesta y entregar los mejores productos con una logística eficiente, transparente y al mejor costo.<br><br>Además de nuestra amplia gama de productos, nuestro servicio al cliente es insuperable en la industria de la motocicleta. Hemos reunido cuidadosamente a un talento humano formando el mejor equipo, experto y comprometido, para colocarlo al servicio de la industria.'
      },
      qualityPolitics: [
        'La primera, es que está bien documentada y descrita en nuestros manuales de procedimiento y constantemente reforzada a todo nuestro personal',
        'La segunda, es que cuenta con el total apoyo e impulso desde la alta gerencia de la organización, que constantemente está invirtiendo en capacitación y actualización de nuestro talento humano',
        'La tercera, es el testimonio de nuestros miles de clientes a quienes es hemos dedicado nuestra pasión y profesionalismo, produciendo resultados satisfactorios en todo momento'
      ],
      cards: [{
        title: 'Alcance Geográfico',
        description: 'Nuestro alcance territorial es una de nuestras mayores fortalezas. Con oficinas operativas en Venezuela, Panamá y China, contamos con la capacidad de gestionar todos los aspectos de nuestra empresa, a nivel global.',
        img: 'img-1'
      }, {
        title: 'Aliados de Negocio',
        description: 'IMV dispone de planes de alianza para comercializadores a nivel nacional. Estos planes tienen como objetivo establecer relaciones de negocio productivas para vendedores locales, talleres mecánicos y demás puntos de venta al por menor.',
        img: 'img-2'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .about-view {
    position: relative;
    &-purpose {
      color: white;
      @media only screen and (min-width: 1500px) {
        h2, p {
          margin-left: -10rem !important;
        }
      }
      @media only screen and (max-width: 1300px) {
        h2, p {
          margin-right: 0 !important;
          width: 100% !important;
          text-align: center;
        }
      }
      .container {
        @media only screen and (max-width: 1300px) {
          padding-top: 22vh !important;
          padding-bottom: 0 !important;
        }
      }
      .helmet-2 {
        position: absolute;
        margin: auto;
        left: 70%;
        right: 0;
        top: 5%;
        bottom: 0;
        text-align: center;
        @media only screen and (max-width: 1300px) {
          display: none;
        }
      }
    }
    &-bgimg {
      z-index: -1;
      position: relative;
      &--space {
        filter: contrast(1.15) brightness(1.15);
        z-index: 1;
        width: 100%;
        height: 60vh;
        overflow: hidden;
        position: absolute;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: linear-gradient(to bottom, #f48321ee, #f48321ee), url('../../src/assets/images/bg-3.webp');
        background-blend-mode: multiply;

        @media only screen and (max-width: 768px) {
          height: 80vh;
        }
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
  }
  .helmet-1 {
    margin-bottom: -30vh;
    display: none;
    @media only screen and (max-width: 1300px) {
      display: flex;
      justify-content: center;
    }
    img {
      width: 90vw;
      max-width: 25rem;
    }
  }
</style>
