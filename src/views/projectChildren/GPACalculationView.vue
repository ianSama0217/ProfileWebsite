<script setup>
import { ref } from "vue";
import sideContentBar from "../../components/singleProjectComponent/sideContentBar.vue";
import webiframe from "../../components/singleProjectComponent/webiframe.vue";
import aLinkButton from "../../components/singleProjectComponent/aLinkButton.vue";
import changeProjectButton from "../../components/singleProjectComponent/changeProjectButton.vue";

const programToolContent = ref("前端:HTML、CSS、JS <br> 框架:無 <br> 套件:無");
const useContent = ref(
  "製作成績計算網站，可以輸入學分數和成績，並計算出GPA。可以使用新增和刪除按鈕編輯輸入框，還有升序和降序按鈕將成績做排列。"
);

const src = ref("https://gpacalculategpa.netlify.app/");
const webURL = ref("https://gpacalculategpa.netlify.app/");
const githubURL = ref("https://github.com/ianSama0217/GPACalculation");
const previousPage = ref("/project/saleHouse");
const nextPage = ref("/project/japanTravel");
</script>

<template>
  <h1>成績計算網站</h1>
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
