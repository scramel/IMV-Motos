<template>
  <b-container class="mx-auto pb-5">
    <b-row cols="2" class="available-products-card" v-for="(product, index) in products" :key="index">
      <b-col sm class="p-5 my-auto">
        <h3>{{ product.title }}</h3>
        <small v-html="product.description"/>
        <br>
        <router-link :to="{ name: product.link_to }" class="btn btn-tertiary mt-4" tag="button" v-if="product.button">{{ product.button }} →</router-link>
      </b-col>
      <img :src="require(`../../src/assets/images/${product.img}.webp`)" alt="Image">
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: { products: Array }
}
</script>

<style lang="scss" scoped>
  .available-products-card {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    img {
      max-height: 400px;
      object-fit: cover;
    }
    @media only screen and (max-width: 992px) {
      justify-content: center;
      .my-auto {
        max-width: 100%;
        flex: 0 0 100%;
      }
      &:nth-child(even) {
        flex-direction: row;
      }
      img {
        max-width: 100%;
      }
    }
  }
</style>
