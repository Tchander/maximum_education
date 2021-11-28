import Vue from "vue";
import VueRouter from "vue-router";
import { ROUTES } from "@/const";
import Home from "@/views/Home.vue";
import SuccessfulWindow from "@/views/SuccessfulWindow";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.home,
    name: "Home",
    component: Home,
  },
  {
    path: ROUTES.success,
    name: "SuccessfulWindow",
    component: SuccessfulWindow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
