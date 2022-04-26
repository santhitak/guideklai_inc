import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../modules/home/views/HomePage");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      layout: "nav"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
