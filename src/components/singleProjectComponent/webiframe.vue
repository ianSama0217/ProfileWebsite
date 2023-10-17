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
  overflow-y: scroll;

  /* 修改滚动条的宽度和颜色 */
  &::-webkit-scrollbar {
    width: 15px; /* 修改滚动条的宽度 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b3b3b3; /* 修改滚动条滑块的颜色 */
  }

  /* 修改滚动轨道的颜色 */
  &::-webkit-scrollbar-track {
    background-color: #d9d9d9; /* 修改滚动轨道的颜色 */
  }

  /* 隐藏滚动按钮 */
  &::-webkit-scrollbar-button:single-button {
    display: none; /* 隐藏滚动按钮 */
  }

  .webImg {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
