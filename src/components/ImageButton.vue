<template>
  <b-col class="image-button mr-4 mb-4">
    <h6 class="my-auto p-2" >{{ title }} →</h6>
    <img :src="require(`../../src/assets/images/${img}`)" alt="Image">
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
    transition: .2s;
    max-width: 16.5rem;
    background-color: #F48221;
    cursor: pointer;
    h6 { transition: .2s; }
    &:hover {
      h6 {
        text-indent: 1rem;
      }
      img {
        filter: brightness(.7);
      }
    }
    img {
      transition: .2s;
      object-fit: cover;
      max-height: 16.5rem;
      max-width: 16.5rem;
    }
    @media only screen and (max-width: 992px) {
      min-width: 50vw;
      margin-right: 0 !important;
      img {
        min-width: 50vw;
      }
    }
  }
</style>
