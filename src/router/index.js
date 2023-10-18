import { createRouter, createWebHistory } from "vue-router";
//匯入NoteView的子路經
import VueNoteView from "../views/noteChildren/VueNoteView.vue";
import BuildNoteView from "../views/noteChildren/BuildNoteView.vue";
//匯入ProjectView的子路徑
import ExpenseTrackerView from "../views/projectChildren/ExpenseTrackerView.vue";
import DessertView from "../views/projectChildren/DessertView.vue";
import SaleHouseView from "../views/projectChildren/SaleHouseView.vue";
import GPACalculationView from "../views/projectChildren/GPACalculationView.vue";
import JapanTravelView from "../views/projectChildren/japanTravelView.vue";
import RamenYaView from "../views/projectChildren/RamenYaView.vue";
import WeatherAPIView from "../views/projectChildren/WeatherAPIView.vue";

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
      children: [
        {
          path: "expenseTracker",
          component: ExpenseTrackerView,
        },
        {
          path: "dessert",
          component: DessertView,
        },
        {
          path: "saleHouse",
          component: SaleHouseView,
        },
        {
          path: "GPAcolculation",
          component: GPACalculationView,
        },
        {
          path: "japanTravel",
          component: JapanTravelView,
        },
        {
          path: "ramenya",
          component: RamenYaView,
        },
        {
          path: "weatherAPI",
          component: WeatherAPIView,
        },
      ],
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
