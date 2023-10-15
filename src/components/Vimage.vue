<script setup>
const props = defineProps({
  //☆SRC資料型態是String
  src: { type: String, default: "" },
  height: { type: Number, default: 200 },
  width: { type: Number, default: 200 },
  alt: { type: String, default: "dog" },
  title: { type: String, default: "dog" },
});
</script>

<template>
  <div class="imgbox">
    <img
      :src="props.src"
      :height="props.height"
      :width="props.width"
      :alt="props.alt"
      :title="props.title"
    />
  </div>
</template>

<style scoped lang="scss">
.imgbox {
  border: 3px solid #ddb4b4;
  border-radius: 50%;
  overflow: hidden;

  img {
    border-radius: 50%;
    margin: 0.5rem;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
