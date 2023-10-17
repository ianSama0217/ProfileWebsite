<script setup>
import { ref } from "vue";
import sideContentBar from "../../components/singleProjectComponent/sideContentBar.vue";
import webiframe from "../../components/singleProjectComponent/webiframe.vue";
import aLinkButton from "../../components/singleProjectComponent/aLinkButton.vue";
import changeProjectButton from "../../components/singleProjectComponent/changeProjectButton.vue";

const programToolContent = ref("前端:HTML、CSS、JS <br> 框架:無 <br> 套件:無");
const useContent = ref(
  "製作記帳網頁，可以儲存收入與支出，並計算出總收入、總支出及結餘，關閉網頁後，資料也會儲存在localStorage之中不會消失。"
);

const src = ref("https://expensetracker1006.netlify.app/");
const webURL = ref("https://expensetracker1006.netlify.app/");
const githubURL = ref("https://github.com/ianSama0217/expenseTrackerWeb");
const previousPage = ref("");
const nextPage = ref("");
</script>

<template>
  <h1>記帳網站介紹</h1>
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
