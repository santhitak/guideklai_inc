const Module = () => import("./Module.vue");
const Manage = () => import("./views/Manage.vue");
const Profile = () => import("./views/Profile.vue");

const moduleRoute = {
  path: "/:username",
  component: Module,
  children: [
    {
      path: "manage_account",
      component: Manage,
      meta: {
        auth: true,
      },
    },
    {
      path: "profile",
      component: Profile,
      meta: {
        auth: true,
      },
    },
  ],
};

export default moduleRoute;
