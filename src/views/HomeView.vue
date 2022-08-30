<template>
  <div class="home">
    <BackgroundTop>
      <NavBar />
        <b-container class="py-5">
          <b-row>
            <b-col lg="7" class="text-white">
              <h1 class="text-white font-weight-bold text-uppercase">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur eos.
              </h1>
              <small>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga quod odio quia eaque ut dignissimos! Reiciendis quibusdam, maiores temporibus id voluptate, nisi sit beatae ipsum dolore ab eos molestias.
              </small>
            </b-col>
          </b-row>
        </b-container>
    </BackgroundTop>
    <FooterComponent />
  </div>
</template>

<script>
import BackgroundTop from '@/components/BackgroundTop.vue'
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar,
    BackgroundTop,
    FooterComponent
  }
}
</script>
