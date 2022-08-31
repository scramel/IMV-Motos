<template>
  <div class="background-top position relative">
    <div class="background-top__overlay position-absolute" :style="`background-image: url(${require(`../assets/images/${background}`)})`"/>
    <div class="background-top__gradient" />
    <div class="background-top__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundTop',
  props: { background: String }
}
</script>

<style lang="scss">
  .background-top {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media only screen and (min-width: 992px) {
      clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
    }
    &__overlay {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      position: absolute;
      position: relative;
      background-repeat: no-repeat;
      // background-size: cover;
      background-position: bottom;
      // transform: matrix(1, 0.09, 0.09, 1, 0, 0);
    }

    $gradient: rgb(22, 18, 17);

    &__gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      transform: rotate(180deg);
      background: linear-gradient($gradient 0%, $gradient 100%);
      opacity: .9;

      &--blue {
        // transform: rotate(180deg);
        background: linear-gradient(0deg, #0E3144 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #0E3144 0%, rgba(0, 0, 0, 0) 100%);
      }
    }

    &__content {
      min-height: 700px;
      z-index: 50 !important;
    }
  }
</style>
