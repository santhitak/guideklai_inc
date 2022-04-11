const Module = () => import("./Module.vue");
const Login = () => import("./views/Login.vue");
const Register = () => import("./views/Register.vue");

const moduleRoute = {
  path: "/auth",
  component: Module,
  children: [
    {
      path: "login",
      component: Login,
      meta: {
        layout: "nav",
      },
    },
    {
      path: "register",
      component: Register,
      meta: {
        layout: "nav",
      },
    },
  ],
};

export default moduleRoute;
