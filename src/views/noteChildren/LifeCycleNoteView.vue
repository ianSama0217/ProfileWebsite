<script setup>
import { ref, reactive } from "vue";
import { RouterLink } from "vue-router";
import codeboard from "../../components/codeboard.vue";
import noteCard from "../../components/noteCard.vue";

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

//codeboard標題~內容
const codeObject = reactive({
  AboutLifeCycle: {
    title: "About life cycle",
    source: `<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log("the component is now mounted.")
})
<script>`,
    content:
      "Vue的組件在創建時都需要經過一系列的初始化流程，在這個過程中會運行稱為生命週期的函式，開發者可以在特定階段運作自定義的程式",
    hint: "使用生命週期函式時，Vue會自動將函式初始化到組件上，這些函式要在組件初始化時被同時註冊，因此要注意不要把生命週期函式放在async function裡面",
  },
  onMounted: {
    title: "onMounted()",
    source: `<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
  el.value // <div>
})
<script>

<template>
  <div ref="el"></div>
</template>`,
    content: "onMounted()功能為設定一個callbackFn，在組件被安裝完成後執行",
    hint: "這個hook在伺服器端rendering期間不會被調用",
  },
  onUpdated: {
    title: "onUpdated()",
    source: `<script setup>
import { ref, onUpdated } from 'vue'

const count = ref(0)

onUpdated(() => {

  console.log(document.getElementById('count').textContent)
})
<script>

<template>
  <button id="count" @click="count++">{{ count }}</button>
</template>`,
    content: "onUpdated()會在組件因為響應式資料變更而更新DOM Tree後執行",
    hint: "這個hook在伺服器端rendering期間不會被調用，注意不要在onUpdated()中更改組件的資料，可能會導致無限循環",
  },
  onUnmounted: {
    title: "onUnmounted()",
    source: `<script setup>
import { onMounted, onUnmounted } from 'vue'

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    // ...
  })
})

onUnmounted(() => clearInterval(intervalId))
<script>`,
    content:
      "onUnmounted()會在組件被移除之後執行函式，通常用來清理一些副作用，例如:計時器、DOM監聽事件",
    hint: "這個hook在伺服器端rendering期間不會被調用",
  },
  onBeforeMount: {
    title: "onBeforeMount()",
    source: `function onBeforeMount(callback: () => void): void`,
    content:
      "onBeforeMount()會在組件被安裝之前執行函式，這個hook被執行時，組件已經完成響應式資料設定，但還沒建立DOM Node",
    hint: "這個hook在伺服器端rendering期間不會被調用",
  },
  onBeforeUpdate: {
    title: "onBeforeUpdate()",
    source: `function onBeforeUpdate(callback: () => void): void`,
    content:
      "onBeforeUpdate()會在組件即將因為響應式資料更新而更新其DOM Node之前執行，這個hook可以在Vue更新DOM之前訪問DOM資料",
    hint: "這個hook在伺服器端rendering期間不會被調用，在這個hook中更新資料也是安全的",
  },
  onBeforeUnmount: {
    title: "onBeforeUnmount()",
    source: `function onBeforeUnmount(callback: () => void): void`,
    content:
      "onBeforeUnmount()會在組件即將被移除之前執行，當這個hook被調用時，組件依然保持全部的功能",
    hint: "這個hook在伺服器端rendering期間不會被調用",
  },
});
</script>

<template>
  <div class="body">
    <div class="sideBar">
      <!-- 左邊放所有note的選單 -->
      <RouterLink to="/note" class="link">
        <img
          src="../../../public/noteImg/vuejs.svg"
          class="vue-icon"
          alt="vue-icon"
          title="noteHome"
        />
      </RouterLink>
      <noteCard
        :title="DirectivesTitle"
        :link="DirectivesLink"
        :linkName="DirectivesLinkName"
        class="noteCard"
      />
      <!-- Router語法box -->
      <noteCard
        :title="RouterDocTitle"
        :link="RouterDocLink"
        :linkName="RouterDocLinkName"
        class="noteCard"
      />
      <!-- Lifecycle語法box -->
      <noteCard
        :title="LifecycleTitle"
        :link="LifecycleLink"
        :linkName="LifecycleLinkName"
        class="noteCard"
      />
      <!-- CompositionAPI語法box -->
      <noteCard
        :title="CompositionAPITitle"
        :link="CompositionAPILink"
        :linkName="CompositionAPILinkName"
        class="noteCard"
      />
      <!-- Compontent語法box -->
      <noteCard
        :title="ComponentTitle"
        :link="ComponentLink"
        :linkName="ComponentLinkName"
        class="noteCard"
      />
      <!-- Pinia語法box -->
      <noteCard
        :title="PiniaTitle"
        :link="PiniaLink"
        :linkName="PiniaLinkName"
        class="noteCard"
      />
    </div>
    <!-- 右邊放筆記內容 -->
    <div class="codeSide">
      <codeboard :codeNote="codeObject" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  position: relative;
  .sideBar {
    width: 45vw;
    height: 100vh;
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    position: sticky;
    top: 0;

    .link {
      align-self: center;
      .vue-icon {
        height: 10vw;
        width: 10vw;
      }
    }
  }
  .codeSide {
    padding: 0 10vw;
    display: flex;
    flex-direction: column;
  }
}
</style>
