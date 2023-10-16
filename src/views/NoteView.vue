<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="logoBar">
    <RouterLink to="" class="link">
      <h1>HTML</h1>
      <img
        src="../../public/noteImg/html5.svg"
        class="logo"
        alt="html-logo"
        title="html-logo"
      />
    </RouterLink>

    <RouterLink to="" class="link">
      <h1>CSS</h1>
      <img
        src="../../public/noteImg/css3.svg"
        class="logo"
        alt="css-logo"
        title="css-logo"
      />
    </RouterLink>

    <RouterLink to="" class="link">
      <h1>JavaScript</h1>
      <img
        src="../../public/noteImg/js.svg"
        class="logo"
        alt="js-logo"
        title="js-logo"
      />
    </RouterLink>

    <RouterLink to="" class="link">
      <H1>Vue</H1>
      <img
        src="../../public/noteImg/vuejs.svg"
        class="logo"
        alt="vue-logo"
        title="vue-logo"
      />
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.logoBar {
  min-height: 90vh;
  padding: 0 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .link {
    text-decoration: none;
    text-align: center;

    .logo {
      height: 20vw;
    }
  }
}
</style>
