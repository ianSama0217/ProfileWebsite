<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  previousPage: {
    type: String,
    default: "",
  },
  nextPage: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="changeProjectBar">
    <RouterLink :to="props.previousPage"
      ><img
        src="../../../public/icon/left-arrow-icon.svg"
        alt="left-icon"
        class="icon"
    /></RouterLink>

    <RouterLink to="/project" class="homeLink">回首頁</RouterLink>

    <RouterLink :to="props.nextPage"
      ><img
        src="../../../public/icon/right-arrow-icon.svg"
        alt="right-icon"
        class="icon"
    /></RouterLink>
  </div>
</template>

<style scoped lang="scss">
.changeProjectBar {
  width: 60vw;
  display: flex;
  justify-content: space-around;

  .icon {
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.5s ease;

    &:hover {
      filter: invert(80%);
    }
  }

  .homeLink {
    text-decoration: none;
    font-size: 2rem;
    align-self: center;
    border-radius: 8px;
    padding: 0.5rem 0.5rem;
    transition: all 0.5s ease;

    &:hover {
      background-color: #232323;
      color: white;
    }
  }
}
</style>
