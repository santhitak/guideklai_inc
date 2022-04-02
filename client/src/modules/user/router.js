const Module = () => import("./Module.vue");
const Manage = () => import("./views/Manage.vue");
const moduleRoute = {
  path: "/id",
  component: Module,
  children: [
    {
      path: "manage_account",
      component: Manage,
      meta: {
        layout: "nav",
      },
    },
  ],
};

export default moduleRoute;
