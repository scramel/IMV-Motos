<template>
  <b-row cols="2" class="mx-auto product-info-card p-5">
    <b-col sm class="text-center product-info-card--image">
      <img :src="require(`../../src/assets/images/${info.img}.png`)" alt="Image">
    </b-col>
    <b-col cols="6" class="my-auto product-info-card--text pr-5">
      <h3 class="mb-4">{{ info.title }}</h3>
      <small v-html="info.description"/>
      <br v-if="info.button">
      <router-link :to="{ name: info.link_to }" class="btn btn-tertiary mt-4" tag="button" v-if="info.button">{{ info.button }} →</router-link>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: { info: Object }
}
</script>

<style lang="scss" scoped>
  .product-info-card {
    background-color: #F5F5F5;
    justify-content: center;
    &--image {
      max-width: 500px;
    }
    &--text {
      max-width: 600px;
    }
    @media only screen and (max-width: 992px) {
      @media only screen and (max-width: 400px) {
        &--image {
          min-width: 100% !important;
          img {
            width: initial !important;
            margin-top: 0 !important;
            min-width: 100%;
          }
        }
      }
      padding: 0 !important;
      &--image {
        padding: 0;
        max-width: 100%;
        img {
          margin-top: 3rem;
          max-height: 250px;
          width: 400px;
          object-fit: cover;
        }
      }
      &--text {
        padding: 2rem !important;
        padding-top: 3rem;
        flex: 0 0 100%;
      }
    }
  }
</style>
