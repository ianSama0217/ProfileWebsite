<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import noteCard from "../components/noteCard.vue";

const DirectivesTitle = ref("template語法");
//router to=""的值
const DirectivesLink = ref([
  "/note/Directives/v-text",
  "/note/Directives/v-html",
  "/note/Directives/v-if",
  "/note/Directives/v-else-if",
  "/note/Directives/v-else",
  "/note/Directives/v-for",
  "/note/Directives/v-on",
  "/note/Directives/v-model",
  "/note/Directives/v-bind",
  "/note/Directives/v-model",
  "/note/Directives/v-slot",
]);
//標籤內名稱<routerlink>DirectivesLinkName</routerlink>
const DirectivesLinkName = ref([
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
//router to=""的值
const RouterDocLink = ref([
  "/note/Router/About router",
  "/note/Router/RouterLink",
  "/note/Router/Dynamic routing",
]);
//標籤內名稱<routerlink>RouterDocLinkName</routerlink>
const RouterDocLinkName = ref([
  "About router",
  "RouterLink",
  "Dynamic routing",
]);

const LifecycleTitle = ref("Life Cycle");
//router to=""的值
const LifecycleLink = ref([
  "/note/LifeCycle/About life cycle",
  "/note/LifeCycle/onMounted()",
  "/note/LifeCycle/onUpdated()",
  "/note/LifeCycle/onUnmounted()",
  "/note/LifeCycle/onBeforeMount()",
  "/note/LifeCycle/onBeforeUpdate()",
  "/note/LifeCycle/onBeforeUnmount()",
]);
//標籤內名稱<routerlink>LifecycleLinkName</routerlink>
const LifecycleLinkName = ref([
  "About life cycle",
  "onMounted()",
  "onUpdated()",
  "onUnmounted()",
  "onBeforeMount()",
  "onBeforeUpdate()",
  "onBeforeUnmount()",
]);

const CompositionAPITitle = ref("Composition API");
//router to=""的值
const CompositionAPILink = ref([
  "/note/CompositionAPI/ref()",
  "/note/CompositionAPI/reactive()",
  "/note/CompositionAPI/computed()",
  "/note/CompositionAPI/readonly()",
  "/note/CompositionAPI/watch()",
]);
//標籤內名稱<routerlink>CompositionAPILink</routerlink>
const CompositionAPILinkName = ref([
  "ref()",
  "reactive()",
  "computed()",
  "readonly()",
  "watch()",
]);

const ComponentTitle = ref("Compontent");
//router to=""的值
const ComponentLink = ref([
  "/note/Compontent/props",
  "/note/Compontent/emit",
  "/note/Compontent/provide",
  "/note/Compontent/inject",
]);
//標籤內名稱<routerlink>ComponentLinkName</routerlink>
const ComponentLinkName = ref(["props", "emit", "provide", "inject"]);

const PiniaTitle = ref("Pinia");
//router to=""的值
const PiniaLink = ref(["/note/Pinia/About Pinia"]);
//標籤內名稱<routerlink>PiniaLinkName</routerlink>
const PiniaLinkName = ref(["About Pinia"]);

//設定點擊router隱藏NoteView渲染畫面
const isDisplay = ref(true);

const isDisplayNoteView = () => {
  isDisplay.value = false;
};
</script>

<template>
  <!-- <img src="../../public/noteImg/vuejs.svg" alt="vue-logo" class="logoImg" /> -->
  <div class="waterfallflow" v-show="isDisplay">
    <!-- template語法box -->
    <noteCard
      :title="DirectivesTitle"
      :link="DirectivesLink"
      :linkName="DirectivesLinkName"
      :isDisplayNoteView="isDisplayNoteView"
      class="noteCard"
    />
    <!-- Router語法box -->
    <noteCard
      :title="RouterDocTitle"
      :link="RouterDocLink"
      :linkName="RouterDocLinkName"
      :isDisplayNoteView="isDisplayNoteView"
      class="noteCard"
    />
    <!-- Lifecycle語法box -->
    <noteCard
      :title="LifecycleTitle"
      :link="LifecycleLink"
      :linkName="LifecycleLinkName"
      :isDisplayNoteView="isDisplayNoteView"
      class="noteCard"
    />
    <!-- CompositionAPI語法box -->
    <noteCard
      :title="CompositionAPITitle"
      :link="CompositionAPILink"
      :linkName="CompositionAPILinkName"
      :isDisplayNoteView="isDisplayNoteView"
      class="noteCard"
    />
    <!-- Compontent語法box -->
    <noteCard
      :title="ComponentTitle"
      :link="ComponentLink"
      :linkName="ComponentLinkName"
      :isDisplayNoteView="isDisplayNoteView"
      class="noteCard"
    />
    <!-- Pinia語法box -->
    <noteCard
      :title="PiniaTitle"
      :link="PiniaLink"
      :linkName="PiniaLinkName"
      :isDisplayNoteView="isDisplayNoteView"
      class="noteCard"
    />
  </div>

  <!-- 顯示Note/:domain子路徑 -->
  <RouterView />
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
