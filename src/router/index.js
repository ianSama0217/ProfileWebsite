import { createRouter, createWebHistory } from "vue-router";
//匯入NoteView的子路經
import VueNoteView from "../views/noteChildren/VueNoteView.vue";
import BuildNoteView from "../views/noteChildren/BuildNoteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/note",
      name: "note",
      component: () => import("../views/NoteView.vue"),
      children: [
        {
          path: "vueNote",
          component: VueNoteView,
        },
        {
          path: "building",
          component: BuildNoteView,
        },
      ],
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/ProjectView.vue"),
    },
    {
      //防止路徑輸入錯誤
      path: "/:domain(.*)*",
      name: "Error",
      component: () => import("../views/ErrorView.vue"),
    },
  ],
});

export default router;
