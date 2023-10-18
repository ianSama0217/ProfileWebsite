<script setup>
import projectCrad from "../components/projectCrad.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <!-- 點擊作品後展示的作品頁面 -->
  <RouterView />

  <h1>我的作品集</h1>
  <div class="projectArea">
    <projectCrad
      :img="{
        src: `../../public/projectImg/expense-tracker.png`,
        alt: `記帳網站`,
        title: `記帳網站`,
      }"
      projectTitle="記帳網站"
      link="/project/expenseTracker"
    />

    <projectCrad
      :img="{
        src: `../../public/projectImg/dessert.png`,
        alt: `甜點網站`,
        title: `甜點網站`,
      }"
      projectTitle="甜點網站"
      link="/project/dessert"
    />

    <projectCrad
      :img="{
        src: `../../public/projectImg/saleHouse.png`,
        alt: `房屋網站`,
        title: `房屋網站`,
      }"
      projectTitle="房屋網站"
      link="/project/saleHouse"
    />

    <projectCrad
      :img="{
        src: `../../public/projectImg/GPA-colculation.jpg`,
        alt: `成績計算網站`,
        title: `成績計算網站`,
      }"
      projectTitle="成績計算網站"
      link="/project/GPAcolculation"
    />

    <projectCrad
      :img="{
        src: `../../public/projectImg/japanFujiYama.jpg`,
        alt: `日本旅遊網站`,
        title: `日本旅遊網站`,
      }"
      projectTitle="日本旅遊網站"
      link="/project/japanTravel"
    />

    <projectCrad
      :img="{
        src: `../../public/projectImg/ramen.jpg`,
        alt: `ラーメン屋網站`,
        title: `ラーメン屋網站`,
      }"
      projectTitle="ラーメン屋網站"
      link="/project/ramenya"
    />

    <projectCrad
      :img="{
        src: `../../public/projectImg/weatherAPI.png`,
        alt: `天氣預報網站`,
        title: `天氣預報網站`,
      }"
      projectTitle="天氣預報網站"
      link="/project/weatherAPI"
    />
  </div>
</template>

<style scoped lang="scss">
h1 {
  font-size: 3rem;
  text-align: center;
  margin: 1rem 0;
}
.projectArea {
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
