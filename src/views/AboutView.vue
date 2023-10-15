<script setup>
import { ref, reactive } from "vue";
import giwawaCard from "../components/giwawaCard.vue";

const title1 = ref("呆吉");
const content1 = ref(
  "Hello!我是呆吉，個性好動，會吃飼主的食物，常常在地上拉屎，讓主人很頭痛，最喜歡吃的食物是沙丁魚!"
);

const title2 = ref("炭吉");
const content2 = ref(
  "Yo!我是炭吉，個性熱情開朗，喜歡鬼吼鬼叫，生氣的時候會亂咬人，夢想是當饒舌歌手，出自己的RAP專輯!"
);

const title3 = ref("麻吉");
const content3 = ref(
  "Hello!我是麻吉，前陣子發現自己是外星品種的狗勾，想回去原本的星球看其他的親戚，夢想是當一隻太空狗勾!"
);

const title4 = ref("睡吉");
const content4 = ref(
  "Zzz...我是睡吉，興趣是睡覺，一天只要吃一餐，可以讓主人省飼料費用...我要睡午覺了..."
);
</script>

<template>
  <!-- #1 影片播放 -->
  <div class="videoArea">
    <h1>關於小吉</h1>
    <iframe
      width="840"
      height="472"
      src="https://www.youtube.com/embed/3D7tb6FEjiM?si=wga3jVjae9misyNE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>

  <!-- 隔開每個段落的線 -->
  <div class="line"></div>

  <!-- #2 狗勾介紹 -->
  <h1 class="giwawaCardTitle">吉吉家族介紹</h1>
  <giwawaCard
    :title1="title1"
    :content1="content1"
    :title2="title2"
    :content2="content2"
    :title3="title3"
    :content3="content3"
    :title4="title4"
    :content4="content4"
  />
</template>

<style scoped lang="scss">
.line {
  border-top: 2px solid #232323;
}

.videoArea {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vh;
  h1 {
    font-size: 3rem;
  }

  iframe {
    margin-top: 1rem;
    border-radius: 8px;
  }
}

.giwawaCardTitle {
  text-align: center;
  font-size: 3rem;
  margin-top: 1rem;
}
</style>
