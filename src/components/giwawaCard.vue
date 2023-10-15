<script setup>
import Vimage from "./Vimage.vue";

//匯入圖片SRC
import dogImageSrc from "../../public/aboutImg/giwawa-card1.jpg";
import dogImageSrc2 from "../../public/aboutImg/giwawa-card2.jpg";
import dogImageSrc3 from "../../public/aboutImg/giwawa-card3.jpg";
import dogImageSrc4 from "../../public/aboutImg/giwawa-card4.jpg";

const props = defineProps({
  title1: {
    type: String,
    default: "狗勾",
  },
  content1: {
    type: String,
    default: "我是可愛狗勾",
  },
  title2: {
    type: String,
    default: "狗勾",
  },
  content2: {
    type: String,
    default: "我是可愛狗勾",
  },
  title3: {
    type: String,
    default: "狗勾",
  },
  content3: {
    type: String,
    default: "我是可愛狗勾",
  },
  title4: {
    type: String,
    default: "狗勾",
  },
  content4: {
    type: String,
    default: "我是可愛狗勾",
  },
});
</script>

<template>
  <div class="dogCard">
    <Vimage :src="dogImageSrc" alt="狗勾" title="乖狗勾" />
    <div class="textCard">
      <h2>{{ props.title1 }}</h2>
      <p>{{ props.content1 }}</p>
    </div>
  </div>

  <div class="dogCard giwawa2">
    <Vimage :src="dogImageSrc2" alt="狗勾" title="乖狗勾" />
    <div class="textCard">
      <h2>{{ props.title2 }}</h2>
      <p>{{ props.content2 }}</p>
    </div>
  </div>

  <div class="dogCard">
    <Vimage :src="dogImageSrc3" alt="狗勾" title="乖狗勾" />
    <div class="textCard">
      <h2>{{ props.title3 }}</h2>
      <p>{{ props.content3 }}</p>
    </div>
  </div>

  <div class="dogCard giwawa4">
    <Vimage :src="dogImageSrc4" alt="狗勾" title="乖狗勾" />
    <div class="textCard">
      <h2>{{ props.title4 }}</h2>
      <p>{{ props.content4 }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dogCard {
  display: flex;
  padding-left: 10vw;
  margin-top: 1rem;

  .textCard {
    width: 400px;
    height: 150px;
    margin-left: 1rem;
    align-self: center;
    padding: 1rem;
    border-radius: 8px;
    background-color: #ddb4b4;

    h2 {
      background-color: #ddb4b4;
      font-size: 2rem;
      margin: 0.5rem;
    }
    p {
      background-color: #ddb4b4;
      font-size: 1.2rem;
      line-height: 1.5rem;
    }
  }
}

.giwawa2,
.giwawa4 {
  padding-left: 30vw;
}
</style>
