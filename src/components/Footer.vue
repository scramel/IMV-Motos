<template>
  <div class="py-5 bg-dark text-white">
    <b-container>
      <b-row align-v="center">
        <b-col lg="3">
          <img src="../../src/assets/images/logo.png" alt="Logo">
          <p>
            <small>
              Todos los derechos reservados 2022. IMVMotos.com
            </small>
          </p>
        </b-col>
        <b-col class="footer-links">
          <router-link :to="{ name: 'home' }">Inicio<br></router-link>
          <router-link :to="{ name: 'about' }">Acerca de IMV Motos<br></router-link>
          <router-link :to="{ name: 'brands' }">Marcas y Productos<br></router-link>
          <router-link :to="{ name: 'brands' }">Logística y Gestión Operativa<br></router-link>
          <router-link :to="{ name: 'contact' }">Contáctenos<br></router-link>
        </b-col>
        <b-col lg="6">
          <div class="d-flex">
            <div class="mr-4">
              <BIconTwitter font-scale="2"/>
            </div>
            <div class="mr-4">
              <BIconFacebook font-scale="2"/>
            </div>
            <div class="mr-4">
              <BIconInstagram font-scale="2"/>
            </div>
          </div>
          <br>
          <small>
            <span style="color: var(--primary)">Ubicación:</span> Urbanización Obarrio, P.H Plaza Obarrio, Piso 2, Oficina 207, Corregimiento Bella Vista, Panama, República de Panama.<br>
            <span style="color: var(--primary)">Teléfono:</span> +507 6839-8881<br>
            <span style="color: var(--primary)">E-mail:</span> info@imvmotos.com
          </small>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BIconTwitter, BIconFacebook, BIconInstagram } from 'bootstrap-vue';
export default {
  name: 'FooterComponent',
  components: {
    BIconTwitter,
    BIconFacebook,
    BIconInstagram
  }
}
</script>

<style lang="scss" scoped>
  .footer-links a {
    color: white;
    &.router-link-exact-active {
      display: none;
    }
  }
</style>
