<script setup>
import { ref } from "vue";
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

const PiniaTitle = ref("Pinia");
//router to=""的值
const PiniaLink = ref(["/note/Pinia/About Pinia"]);
//標籤內名稱<routerlink>PiniaLinkName</routerlink>
const PiniaLinkName = ref(["About Pinia"]);

//v-text標題~內容
const codeNoteTitle = ref("v-text");
const codeSource = ref(`<template>
  <!-- const str = ref("hello"); -->
  <p v-text="str"></p>
  <p>{{ str }}</p>
</template>`);

const codeNoteContent = ref(
  "這指令功能是把v-text輸入的文字渲染在p標籤部，平常很少用到，會直接在標籤輸入{{ }}放入變數"
);
const codeNoteHint = ref(
  "v-text優先級高於{{ }}，如果標籤同時有v-text，{{ }}，畫面只會顯示v-text的value"
);
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
      <codeboard
        :code-note-title="codeNoteTitle"
        :codeSource="codeSource"
        :codeNoteContent="codeNoteContent"
        :codeNoteHint="codeNoteHint"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  display: flex;
  position: relative;
  .sideBar {
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
