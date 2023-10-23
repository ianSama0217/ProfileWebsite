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
  aboutRouter: {
    title: "About Router",
    source: `import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router`,
    content:
      "Router是實現SPA所使用的技術，透過Javascript程式碼傳遞使用者所選擇的路徑，而不是像傳統網站一樣一個頁面就是一個HTML",
    hint: "",
  },
  RouterLinkHTML: {
    title: "RouterLink",
    source: `<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
</template>
`,
    content:
      "在template匯入RotuerLink，然後在想要顯示View的位置加入RouterView，RouterLink類似html中的a標籤，to=``部分就跟a標籤的href一樣放入路徑，路徑要到index.js進行設定",
    hint: "使用RouterLink、RouterView之前，要先從vue-router裡import進來",
  },
  RouterLink: {
    title: "設定Router",
    source: `import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})`,
    content:
      "匯入路徑有兩種方法，一種是像HomeView一樣先在上面匯入，在Component輸入匯入的名稱，第二種方法是像AboutView直接在Component裡面import路徑",
    hint: "",
  },
  RouterChildrenHTML: {
    title: "創建子路由",
    source: `<template>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/about/me">about me</RouterLink>
  <RouterLink to="/about/shop">about shop</RouterLink>

  <RouterView />
</template>
`,
    content: "在to=``前面要記得加上父路徑的連結，路徑要到index.js進行設定",
    hint: "使用RouterLink、RouterView之前，要先從vue-router裡import進來",
  },
  RouterChildren: {
    title: "設定子路由",
    source: `const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
      children: [
        {
          path: "me",
          component: () => import("../views/AboutMeView.vue"),
        },
        {
          path: "shop",
          component: () => import("../views/AboutShopView.vue"),
        },
      ],
    },
  ],
});`,
    content:
      "在想要加入子路由的父路由中使用children，然後在[]中建立路徑就完成了",
    hint: "子路由通常用在需要顯示畫面不同的時候，如果不同路徑只是換圖片跟文字即可，可使用動態路由",
  },
  DynamicRouting: {
    title: "Dynamic routing",
    source: `const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about/:id",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});`,
    content:
      "以about為例，在後面加上/:id(id只是個自定義變數，要輸入其他名稱也可以)，在RouterLink to=`/about/`之中，不管輸入甚麼都會顯示相對應的路徑，有很大的彈性",
    hint: "動態路由通常用在顯示畫面差異不大的時候，像是電商網站的商品頁面，當顯示畫面差異很大時，建議使用子路徑",
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
