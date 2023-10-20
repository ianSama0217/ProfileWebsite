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
  vText: {
    title: "v-text",
    source: `<template>
  <!-- const str = ref("hello"); -->
  <p v-text="str"></p>
  <p>{{ str }}</p>
</template>`,
    content:
      "這指令功能是把v-text輸入的文字渲染在p標籤，平常很少用到，會直接在標籤輸入{{ }}放入變數",
    hint: "v-text優先級高於{{ }}，如果標籤同時有v-text，{{ }}，畫面只會顯示v-text的value",
  },
  vHTML: {
    title: "v-html",
    source: `<template>
  <!-- const str = ref("<a href="#">hello</a>"); -->
  <p v-html="str"></p>
  <p v-text="str"></p>
</template>`,
    content:
      "這指令功能是把v-html輸入的文字渲染在p標籤，需要用html標籤才會用到，平常會直接在標籤輸入{{ }}放入變數",
    hint: "v-text和v-html的差異就像innerText和innerHTML一樣",
  },
  vIf: {
    title: "v-if",
    source: `<template>
  <!-- const bool = ref(true); -->
  <!-- const isDisplay = () => (bool.value = !bool.value); -->

  <p v-if="bool">Hello World!</p>
  <button @click="isDisplay()">click</button>
</template>`,
    content:
      "這指令功能是決定標籤是否顯示，如果v-if==true會顯示標籤，反之則銷毀標籤",
    hint: "v-if和v-for不要放在同一個標籤，如果放在同一個標籤，會先執行v-if，導致v-for執行被影響，若想對v-for裡的標籤做v-if，可以將v-if另外放在v-for裡面的一個容器，如下圖。",
  },
  vIfReplenish: {
    source: `<ul>
  <li v-for="item in items">
    <div v-if="item.visible">
      {{ item.text }}
    </div>
  </li>
</ul>`,
  },
  vElseIf: {
    title: "v-else-if",
    source: `<template>
  <!-- const num = ref(2); -->

  <p v-if="num == 1">num is 1</p>
  <p v-else-if="num == 2">num is 2</p>
  <p v-else-if="num == 3">num is 3</p>
</template>`,
    content: "v-else-if要搭配v-if一起使用，效果就跟if-else判斷式一樣",
  },
  vElse: {
    title: "v-else",
    source: `<template>
  <!-- const num = ref(8); -->

  <p v-if="num == 1">num is 1</p>
  <p v-else-if="num == 2">num is 2</p>
  <p v-else-if="num == 3">num is 3</p>
  <p v-else>num is not 1,2,3</p>
</template>`,
    content: "v-else要搭配v-if一起使用，效果就跟if-else判斷式一樣",
    hint: "如果v-else上面有超過一個v-if，v-else會抓取離自己最近的v-if判斷",
  },
  vFor: {
    title: "v-for",
    source: `<template>
  <!-- const obj = reactive({
  a: 1,
  b: 2,
  c: 3,
}); -->

  <p v-for="(value, key, index) in obj">
    第{{ index }}項的{{ key }}值是: {{ value }}
  </p>
</template>`,
    content:
      "v-for可以指定標籤要印出的次數，最常使用的是v-for=`item in array`，除了array也可以放number或object，用來印components還蠻好用的",
    hint: "v-for=`item in array`除了item之外，如果對象是Object的話，還可以輸入其他參數v-for=`(value, key, index) in object`，value代表物件的value，key代表物件的key，index代表物件在{}的順序",
  },
  vOn: {
    title: "v-on",
    source: `<template>
  <!-- const num = ref(8); -->

  <p>{{ num }}</p>
  <button v-on:click="num++">click</button>
  <button @click="num--">click</button>
</template>`,
    content:
      "v-on通常用在button、input、select上，效果就像JS的addEventListener",
    hint: "v-on:click可以用語法糖改寫成@click",
  },
  vModel: {
    title: "v-model",
    source: `<template>
  <!-- const str = ref("hello world"); -->

  <input type="text" v-model="str" />
  <p>{{ str }}</p>
</template>`,
    content:
      "放在input標籤，可以和文字標籤做雙向資料傳遞，達到input和文字標籤同時更新的效果",
    hint: "v-model有三個常用的修飾符，v-model.lazy，當input發生change事件才會改變value，v-model.number，讓input的輸出的資料型態轉為number，v-model.trim，取消input輸出前後的空格",
  },
  vBind: {
    title: "v-bind",
    source: `<template>
  <!-- const redFont = ref("red"); -->

  <p :class="redFont">Hello World!</p>
</template>

<style scoped>
.red {
  color: red;
}
</style>`,
    content: "v-bind可以賦予標籤變數，讓標籤可以動態更新資料",
    hint: "v-bind:class=`redFont`可以用語法糖改寫成:class=`redFont`，要注意動態賦予的屬性CSS會抓不到reference，但還是可以修改v-bind標籤的樣式",
  },
  // vSlot:{
  //   title:
  //   source:
  //   content:
  //   hint:
  // },
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
    width: 55vw;
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
