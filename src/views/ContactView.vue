<template>
  <div class="home">
    <BackgroundTop :background="'bg-1.jpg'" style="max-height: 16rem;">
      <NavBar/>
      <b-container class="py-5 text-center">
        <h1 class="text-white font-weight-bold text-uppercase">Contáctenos</h1>
      </b-container>
    </BackgroundTop>
    <FooterComponent/>
  </div>
</template>

<script>
import BackgroundTop from '@/components/BackgroundTop.vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'
// import ImageButtonComponent from '@/components/ImageButton.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    BackgroundTop,
    FooterComponent
  }
}
</script>
