<script setup>
import { ref } from "vue";
import sideContentBar from "../../components/singleProjectComponent/sideContentBar.vue";
import webiframe from "../../components/singleProjectComponent/webiframe.vue";
import aLinkButton from "../../components/singleProjectComponent/aLinkButton.vue";
import changeProjectButton from "../../components/singleProjectComponent/changeProjectButton.vue";

const programToolContent = ref("前端:HTML、CSS <br> 框架:無 <br> 套件:無");
const useContent = ref(
  "製作ラーメン屋網站，練習排版、修改HTML文字、圖片...標籤樣式。。"
);

const src = ref("https://ramenyanoweb.netlify.app/");
const webURL = ref("https://ramenyanoweb.netlify.app/");
const githubURL = ref("https://github.com/ianSama0217/ramen-shop-website");
const previousPage = ref("/project/japanTravel");
const nextPage = ref("/project/weatherAPI");
</script>

<template>
  <h1>ラーメン屋網站</h1>
  <div class="flexbox">
    <sideContentBar
      :programToolContent="programToolContent"
      :useContent="useContent"
    />
    <div class="rightSideflexbox">
      <webiframe :src="src" />
      <aLinkButton :webURL="webURL" :githubURL="githubURL" />
      <changeProjectButton :previousPage="previousPage" :nextPage="nextPage" />
    </div>
  </div>
</template>

<style scoped lang="scss">
h1 {
  margin-top: 5vh;
  text-align: center;
}

.flexbox {
  display: flex;
  justify-content: space-between;
  padding: 2rem 5% 0 5%;
  margin-bottom: 5vh;

  .rightSideflexbox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
