import { createRouter, createWebHistory } from "vue-router";

const HomePage = () => import("../modules/home/views/HomePage");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      auth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (to.meta.auth && !isLoggedIn) {
    alert("Please login first!");
    next({ path: "/auth/login" });
  }

  if (to.meta.auth && isLoggedIn) {
    console.log("You've already logged in");
  }
  next();
});

export default router;
