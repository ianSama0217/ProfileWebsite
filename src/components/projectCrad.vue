<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  img: {
    src: { type: String, default: "" },
    height: { type: Number, default: 200 },
    width: { type: Number, default: 200 },
    alt: { type: String, default: "網站作品" },
    title: { type: String, default: "網站作品" },
  },
  projectTitle: {
    type: String,
    default: "網頁設計作品",
  },
  link: {
    type: String,
    default: "",
  },
  isDisplayProjectView: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <div class="projectCard">
    <div class="imgBox">
      <img :src="props.img.src" :alt="props.img.alt" :title="props.img.title" />
    </div>

    <div class="titleArea">
      <h3>{{ props.projectTitle }}</h3>
      <RouterLink @click="isDisplayProjectView" :to="props.link" class="link"
        >詳細資訊</RouterLink
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.projectCard {
  border: 2px solid #232323;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #b3b3b3;
  margin: 1rem 0;
  .imgBox {
    padding: 0.5rem;
    margin: 1rem 0;
    border: 2px solid #858484;
    border-radius: 8px;
    overflow: hidden;

    img {
      height: 200px;
      width: 200px;
      border-radius: 8px;
      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .titleArea {
    background-color: #b3b3b3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 2rem;
      background-color: #b3b3b3;
      margin-bottom: 1rem;
    }
    .link {
      font-size: 1.5rem;
      padding: 0.5rem;
      border-radius: 8px;
      text-decoration: none;
      background-color: #b3b3b3;
      border: 2px solid #777;
      margin-bottom: 1rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: #777;
        color: white;
      }
    }
  }
}
</style>
