<template>
  <b-col class="image-button mr-4 mb-4 p-0 d-flex" :style="`background-image: url(${require(`../../src/assets/images/${img}`)});`">
    <h4 class="my-auto p-2" >{{ title }}</h4>
    <!-- <img :src="require(`../../src/assets/images/${img}`)" alt="Image"> -->
    <h6 class="my-auto p-2 text-left">Descargar PDF →</h6>
  </b-col>
</template>

<script>
export default {
  props: {
    img: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .image-button {
    flex-direction: column;
    place-content: space-between;
    min-height: 40vh;
    transition: .2s;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    h4, h6 {
      color: white;
      background-color: black;
      transition: .2s;
      margin: 0 !important;
    }
    &:hover {
      h4, h6 {
        text-indent: 1rem;
      }
      img {
        filter: brightness(.7);
      }
    }
    img {
      transition: .2s;
    }
    @media only screen and (max-width: 992px) {
      min-width: 50vw;
      margin: 1rem !important;
      img {
        min-width: 50vw;
      }
    }
  }
</style>
