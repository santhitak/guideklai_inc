const Module = () => import("./Module.vue");
const Review = () => import("./views/Review.vue");

const moduleRoute = {
  path: "/",
  component: Module,
  children: [
    {
      path: "review",
      component: Review,
      meta: {
        layout: "nav",
      },
    },
  ],
};

export default moduleRoute;
