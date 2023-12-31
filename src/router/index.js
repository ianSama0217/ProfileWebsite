import { createRouter, createWebHistory } from "vue-router";
//匯入NoteView的子路經

//匯入ProjectView的子路徑
import ExpenseTrackerView from "../views/projectChildren/ExpenseTrackerView.vue";
import DessertView from "../views/projectChildren/DessertView.vue";
import SaleHouseView from "../views/projectChildren/SaleHouseView.vue";
import GPACalculationView from "../views/projectChildren/GPACalculationView.vue";
import JapanTravelView from "../views/projectChildren/japanTravelView.vue";
import RamenYaView from "../views/projectChildren/RamenYaView.vue";
import WeatherAPIView from "../views/projectChildren/WeatherAPIView.vue";
//匯入NoteView的子路徑(動態)
import DirectivesNoteView from "../views/noteChildren/DirectivesNoteView.vue";
import RouterNoteView from "../views/noteChildren/RouterNoteView.vue";
import LifeCycleNoteView from "../views/noteChildren/LifeCycleNoteView.vue";
import CompositionAPINoteView from "../views/noteChildren/ReactivityCoreNoteView.vue";
import ComponentNoteView from "../views/noteChildren/CompontentNoteView.vue";
import PiniaNoteView from "../views/noteChildren/PiniaNoteView.vue";

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
          path: "Directives/:domain",
          component: DirectivesNoteView,
        },
        {
          path: "Router/:domain",
          component: RouterNoteView,
        },
        {
          path: "LifeCycle/:domain",
          component: LifeCycleNoteView,
        },
        {
          path: "CompositionAPI/:domain",
          component: CompositionAPINoteView,
        },
        {
          path: "Compontent/:domain",
          component: ComponentNoteView,
        },
        {
          path: "Pinia/:domain",
          component: PiniaNoteView,
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
