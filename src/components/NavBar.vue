<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <router-link :to="{ name: 'home' }">
        <img src="../../src/assets/images/logo.webp" alt="Logo">
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <router-link tag="button" class="btn btn-secondary" :to="{ name: 'home' }">
              Inicio
            </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link tag="button" class="btn btn-secondary" :to="{ name: 'about' }">
              Acerca de IMV Motos
            </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link tag="button" class="btn btn-secondary" :to="{ name: 'brands' }">
              Marcas, productos y logística
            </router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link tag="button" class="btn btn-primary" :to="{ name: 'contact' }">
              Contáctenos
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
