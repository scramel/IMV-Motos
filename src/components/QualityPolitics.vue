<template>
  <b-col class="quality-politics p-4 m-3">
    <div class="mb-2">
      <p>{{ index }}
        <img class="mr-2" cols="1" :src="require(`../../src/assets/icons/icon-star.svg`)" alt="Icon">
      </p>
    </div>
    <small>{{ text }}.</small>
  </b-col>
</template>

<script>
export default {
  props: {
    text: String,
    index: Number
  }
}
</script>

<style lang="scss" scoped>
  .quality-politics {
    background-color: var(--light);
    min-width: 20rem;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    place-content: center;
    p {
      z-index: 1;
      display: flex;
      justify-content: center;
      font-size: 50px;
      color: var(--primary);
      position: relative;
    }
    img {
      z-index: -1;
      position: absolute;
      margin: 0 !important;
    }
  }
</style>
