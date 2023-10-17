<script setup>
const props = defineProps({
  programToolContent: {
    type: String,
    default: "",
  },
  useContent: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="content">
    <h3 class="contentTitle">使用語言</h3>
    <p class="mainContent" v-html="props.programToolContent"></p>
    <h3 class="contentTitle">網頁用途</h3>
    <p class="mainContent">
      {{ useContent }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.content {
  border: 2px solid #232323;
  background-color: #b3b3b3;
  border-radius: 8px;
  width: 20vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;

  .contentTitle {
    background-color: #b3b3b3;
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  .mainContent {
    background-color: #b3b3b3;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
}
</style>
