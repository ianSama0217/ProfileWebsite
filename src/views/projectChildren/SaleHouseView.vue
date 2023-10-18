<script setup>
import { ref } from "vue";
import sideContentBar from "../../components/singleProjectComponent/sideContentBar.vue";
import webiframe from "../../components/singleProjectComponent/webiframe.vue";
import aLinkButton from "../../components/singleProjectComponent/aLinkButton.vue";
import changeProjectButton from "../../components/singleProjectComponent/changeProjectButton.vue";

const programToolContent = ref(
  "前端:HTML、CSS、JS <br> 框架:無 <br> 套件:Bootstrap"
);
const useContent = ref(
  "製作房屋網站，可以瀏覽房屋資訊，點進不同分頁，觀看各種相關資訊，首頁的輪播功能使用bootstrap元件製作。"
);

const src = ref("https://housesalewebsite.netlify.app/");
const webURL = ref("https://housesalewebsite.netlify.app/");
const githubURL = ref("https://github.com/ianSama0217/houseSaleWebsite");
const previousPage = ref("/project/dessert");
const nextPage = ref("/project/GPAcolculation");
</script>

<template>
  <h1>房屋網站</h1>
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
