<script setup>
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="iframeBox">
    <iframe :src="src" class="webImg"></iframe>
  </div>
</template>

<style scoped lang="scss">
.iframeBox {
  border: 2px solid #232323;
  border-radius: 8px;
  width: 60vw;
  height: 50vh;

  .webImg {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
