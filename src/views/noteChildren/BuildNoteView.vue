<script setup></script>

<template>
  <div class="buildArea">
    <h1>網頁建置中...</h1>
    <img
      src="../../../public/builderImg/builder.gif"
      class="buildImg"
      alt="building..."
    />
  </div>
</template>

<style scoped lang="scss">
.buildArea {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  .buildImg {
    width: 80%;
    border-radius: 8px;
    margin: 1rem 10%;
  }
}
</style>
