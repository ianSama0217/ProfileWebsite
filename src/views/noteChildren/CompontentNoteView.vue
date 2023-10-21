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
const ComponentLink = ref(["/note/Compontent/props", "/note/Compontent/emit"]);
//標籤內名稱<routerlink>ComponentLinkName</routerlink>
const ComponentLinkName = ref(["props", "emit"]);

const PiniaTitle = ref("Pinia");
//router to=""的值
const PiniaLink = ref(["/note/Pinia/About Pinia"]);
//標籤內名稱<routerlink>PiniaLinkName</routerlink>
const PiniaLinkName = ref(["About Pinia"]);

//codeboard標題~內容
const codeObject = reactive({
  props: {
    title: "props",
    source: `<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
    required: true, //設定是否為必填
  },
  age: {
    type: Number,
    default: null,
    required: true,
    //自定義函式 會回傳true表示驗證通過 false表示失敗
    validator: (value) => {
      return value >= 18;
    },
    //強制轉換prop值的自定義函式
    coerce: (value) => {
      return parseInt(value);
    },
  },
  isMarried: {
    type: Boolean,
    default: false,
  },
  Function: {
    type: Function,
    default: () => {
      console.log("hello world");
    },
  },
  Array: {
    type: Array,
    default: () => [],
  },
  Object: {
    type: Object,
    default: () => ({}),
  },
});
<script>`,
    content:
      "props讓父組件可以賦予子組件的標籤屬性或文字，props可以是各種資料型態，宣告資料型態時，第一個字母要記得大寫",
    hint: "props的type為object或array時，設定default時要特別注意(如上圖)",
  },
  emitChildComponent: {
    title: "emits",
    source: `<script setup>
const emit = defineEmits("childComponent");

const emitEvent = () => {
  //emit參數1:定義事件名稱 參數2:定義事件要傳遞的值
  emit("childComponent", "這是子組件的emit事件傳遞");
};
<script>

<template>
  <button @click="emitEvent">click</button>
</template>`,
    content:
      "emits透過子組件元素觸發自定義事件，將子組件資料傳遞給父組件，通常會搭配按鈕使用",
    hint: "",
  },
  emitParentComponent: {
    title: "emits父組件",
    source: `<script setup>
import { ref } from "vue";
import testComponent from "../components/testComponent.vue";

const childData = ref("");

const getChildData = (data) => {
  childData.value = data;
};
<script>

<template>
  <testComponent @childComponent="getChildData" />
  <h1>{{ childData }}</h1>
</template>`,
    content:
      "父組件透過emits定義的方法名稱來取得子組件傳遞的資料，通常也都是用按鈕來觸發事件",
    hint: "",
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
    width: 35vw;
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
