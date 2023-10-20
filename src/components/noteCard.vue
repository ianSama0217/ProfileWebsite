<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  title: {
    type: String,
    default: "Vue語法",
  },
  link: {
    type: Array,
    default: () => [],
  },
  linkName: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="noteLinkBox">
    <h3 class="noteTitle">{{ title }}</h3>
    <RouterLink
      class="noteLink"
      :to="link[index]"
      v-for="(item, index) in linkName"
      >{{ item }}</RouterLink
    >
  </div>
</template>

<style scoped lang="scss">
.noteLinkBox {
  border-radius: 8px;
  border: 2px solid #777;
  width: 20vw;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  margin: 1rem;
  .noteTitle {
    font-size: 1.8rem;
    align-self: center;
    margin-bottom: 0.5rem;
  }
  .noteLink {
    color: grey;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0.2rem;
    transition: all 0.5s ease;

    &:hover {
      background-color: #b3b3b3;
    }
  }
}
</style>
