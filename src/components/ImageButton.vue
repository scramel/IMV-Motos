<template>
  <b-col>
    <img :src="require(`../../src/assets/images/${img}`)" alt="Image">
  </b-col>
</template>

<script>
export default {
  props: { img: String }
}
</script>
