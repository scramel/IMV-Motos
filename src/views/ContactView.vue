<template>
  <div class="home">
    <BackgroundTop :background="'bg-1.jpg'">
      <NavBar/>
      <b-container class="py-5 text-center">
        <h1 class="text-white font-weight-bold text-uppercase">Contáctenos</h1>
      </b-container>
    </BackgroundTop>
    <b-container class="text-center my-5">
      <h3>Escríbanos para mayor información de nuestras<br>marcas y productos:</h3>
      <br>
      <b-card no-body class="overflow-hidden text-left">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require(`../../src/assets/images/img-1.png`)" alt="Image" class="rounded-0 p-4"></b-card-img>
            <b-card-text class="w-75 mx-auto">
                <img class="mr-2" cols="1" :src="require(`../../src/assets/icons/icon-location.svg`)" alt="Icon">
                <small cols="8"><span style="color: var(--primary);">Ubicación:</span> Urbanización Obarrio, P.H Plaza Obarrio, Piso 2, Oficina 207, Corregimiento Bella Vista, Panama, República de Panama.</small>
                <br>
                <br>
                <img class="mr-2" cols="1" :src="require(`../../src/assets/icons/icon-phone.svg`)" alt="Icon">
                <small cols="8"><span style="color: var(--primary);">Teléfono:</span> +507 6839-8881</small>
                <br>
                <br>
                <img class="mr-2" cols="1" :src="require(`../../src/assets/icons/icon-email.svg`)" alt="Icon">
                <small cols="8"><span style="color: var(--primary);">E-mail:</span> info@imvmotos.com</small>
                <br>
                <br>
            </b-card-text>
          </b-col>
          <b-col md="6">
            <b-card-body title="Llene el siguiente formulario:">
              <b-form @submit="onSubmit">
                <b-form-group id="input-group-1" label="Nombre Completo:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Correo Electrónico:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Teléfono:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.phone"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-4" label="Nombre de la empresa:" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    v-model="form.enterprise"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-5" label="¿En que podemos ayudarle?" label-for="input-5">
                  <b-form-textarea
                    id="textarea"
                    v-model="form.about"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <div class="mx-auto text-center">
                  <b-button type="submit" variant="quaternary" >Enviar información</b-button>
                </div>
              </b-form>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
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
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        phone: null,
        enterprise: '',
        about: ''
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
