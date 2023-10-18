<script setup>
import { ref } from "vue";
import sideContentBar from "../../components/singleProjectComponent/sideContentBar.vue";
import webiframe from "../../components/singleProjectComponent/webiframe.vue";
import aLinkButton from "../../components/singleProjectComponent/aLinkButton.vue";
import changeProjectButton from "../../components/singleProjectComponent/changeProjectButton.vue";

const programToolContent = ref("前端:HTML、CSS、JS <br> 框架:無 <br> 套件:無");
const useContent = ref(
  "製作天氣預報網站，使用中央氣象局API抓取當日18點至隔日清晨6點的天氣預報，可選擇台灣各縣市的天氣預報。"
);

const src = ref("https://taiwanweathersearch36hr.netlify.app/");
const webURL = ref("https://taiwanweathersearch36hr.netlify.app/");
const githubURL = ref("https://github.com/ianSama0217/getWeatherAPI");
const previousPage = ref("/project/ramenya");
const nextPage = ref("/project/expenseTracker");
</script>

<template>
  <h1>天氣預報網站</h1>
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
