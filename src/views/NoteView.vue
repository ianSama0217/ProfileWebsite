<script setup>
import { ref, reactive } from "vue";
import { RouterLink, RouterView } from "vue-router";
import noteCard from "../components/noteCard.vue";

const DirectivesTitle = ref("template語法");
//router to=""的值 ，也是標籤內名稱
const DirectivesLink = ref([
  "v-text",
  "v-html",
  "v-if",
  "v-else-if",
  "v-else",
  "v-for",
  "v-on",
  "v-model",
  "v-bind",
  "v-model",
  "v-slot",
]);

const RouterDocTitle = ref("Router");
//router to=""的值 ，也是標籤內名稱
const RouterDocLink = ref(["About router", "RouterLink", "Dynamic routing"]);

const LifecycleTitle = ref("Life Cycle");
//router to=""的值 ，也是標籤內名稱
const LifecycleLink = ref([
  "About life cycle",
  "onMounted()",
  "onUpdated()",
  "onUnmounted()",
  "onBeforeMount()",
  "onBeforeUpdate()",
  "onBeforeUnmount()",
]);

const CompositionAPITitle = ref("Composition API");
//router to=""的值 ，也是標籤內名稱
const CompositionAPILink = ref([
  "ref()",
  "reactive()",
  "computed()",
  "readonly()",
  "watch()",
]);

const PiniaTitle = ref("Pinia");
//router to=""的值 ，也是標籤內名稱
const PiniaLink = ref(["About Pinia"]);

// const linkURL = computed();
</script>

<template>
  <!-- <img src="../../public/noteImg/vuejs.svg" alt="vue-logo" class="logoImg" /> -->
  <div class="waterfallflow">
    <!-- template語法box -->
    <noteCard
      :title="DirectivesTitle"
      :link="DirectivesLink"
      class="noteCard"
    />
    <!-- Router語法box -->
    <noteCard :title="RouterDocTitle" :link="RouterDocLink" class="noteCard" />
    <!-- Lifecycle語法box -->
    <noteCard :title="LifecycleTitle" :link="LifecycleLink" class="noteCard" />
    <!-- CompositionAPI語法box -->
    <noteCard
      :title="CompositionAPITitle"
      :link="CompositionAPILink"
      class="noteCard"
    />
    <!-- Pinia語法box -->
    <noteCard :title="PiniaTitle" :link="PiniaLink" class="noteCard" />
  </div>
</template>

<style scoped lang="scss">
.waterfallflow {
  padding: 5% 10%;
  // 將欄分成3等分
  column-count: 3;
  .noteCard {
    break-inside: avoid; //防止noteCard被分割
  }
}
</style>
