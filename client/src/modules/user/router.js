const Module = () => import("./Module.vue");
const Manage = () => import("./views/Manage.vue");
const Security = () => import("./components/Security.vue");
const Account = () => import("./components/Account.vue");

const moduleRoute = {
  path: "/id",
  component: Module,
  children: [
    {
      path: "manage_account",
      component: Manage,
      meta: {
        layout: "nav",
        auth: true,
      },
    },
    {
      path: "manage_account/security",
      component: Security,
      meta: {
        layout: "nav",
      },
    },
    {
      path: "manage_account/account",
      component: Account,
      meta: {
        layout: "nav",
      },
    },
  ],
};

export default moduleRoute;
