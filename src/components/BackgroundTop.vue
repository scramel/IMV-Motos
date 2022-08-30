<template>
  <div class="background-top position relative">
    <div class="background-top__overlay position-absolute" :style="`background-image: url(${require('../assets/images/bg-1.jpg')})`"/>
    <div class="background-top__gradient" />
    <div class="background-top__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundTop'
}
</script>

<style lang="scss">
  .background-top {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

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
      background-position: center;
    }

    &__gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      transform: rotate(180deg);
      background: linear-gradient(rgba(0, 0, 0) 0%, rgba(0, 0, 0) 100%);
      opacity: .9;

      &--blue {
        // transform: rotate(180deg);
        background: linear-gradient(0deg, #0E3144 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #0E3144 0%, rgba(0, 0, 0, 0) 100%);
      }
    }

    &__content {
      z-index: 50 !important;
    }
  }
</style>
