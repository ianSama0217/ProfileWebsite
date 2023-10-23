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
  "ref()": {
    title: "ref()",
    source: `<script setup>
import { ref, reactive, computed } from "vue";

const name = ref("Jack");
console.log(name.value); //Jack
<script>`,
    content:
      "ref()可創建所有資料型態的響應式數據，創建完後放入HTML標籤即可使用",
    hint: "ref()放入Object，Object的資料改變不會被watch監測，若資料型態為Object，建議使用reactive()。變更ref資料時要輸入變數名稱.value才是指定變數的value",
  },
  "reactive()": {
    title: "reactive()",
    source: `<script setup>
import { ref, reactive, computed } from "vue";

const name = ref("Jack");

const nameObject = reactive({
  name: name,
});

console.assertlog(nameObject.name == name.value); //true
<script>`,
    content:
      "reactive()只能放Array和Object兩種資料型態，通常只有Object才會使用reactive()",
    hint: "reactive()如果使用ref宣告的value的話，直接放入變數名稱就會自動解包，不用再加上.value",
  },
  "computed()": {
    title: "computed()",
    source: `<script setup>
import { ref, computed } from "vue";

const num = ref(1);

const isBigThan3 = computed(() => {
  if (num.value > 3) {
    return num.value + "大於3";
  } else {
    return num.value + "小於等於於3";
  }
});
<script>`,
    content: "computed通常用於進行計算和更改資料",
    hint: "computed()裡面的callback function的()不能宣告參數，computed()要使用ref()要加上.value才能取得資料",
  },
  "computed()": {
    title: "computed() get & set",
    source: `<script setup>
const count = ref(1);
const setCount = computed({
  get: () => count.value,
  set: (val) => {
    count.value = val;
  },
});

console.log(setCount.value); // 1
setCount.value = 5;
console.log(setCount.value); // 5
console.log(count.value); // 5 count資料跟著被改變
<script>`,
    content:
      "computed()可以創建一個物件放入get和set分別執行不同的函式，get取得value，set設定value",
    hint: "computed()要印出value的話也要加上.value，set的value改變之後，如果改變對象是響應式數據，那value的資料都會被改變",
  },
  "readonly()": {
    title: "readonly()",
    source: `<script setup>
const original = reactive({ count: 0 });
const copy = readonly(original); //不能修改copy這個變數

original.count++; //original可以更新value
copy.count++; // 系統會報錯
<script>`,
    content:
      "readonly()可以建立一個不能編輯的變數，如果不希望資料被更改可以使用這個方法",
    hint: "",
  },
  "watch()": {
    title: "watch()",
    source: `<script setup>
const count = ref(0);
//watch() 參數1:要監測的變數 參數2:當change觸發，要執行的函式
watch(count, (oldValue, newValue) => {
  console.log(oldValue, newValue);
});
<script>`,
    content: "當watch監測的變數發生change事件，就執行callback function",
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
    width: 50vw;
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
