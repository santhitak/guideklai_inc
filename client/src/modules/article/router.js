const Module = () => import("./Module.vue");
const Article = () => import("./views/article.vue");

const moduleRoute = {
  path: "/",
  component: Module,
  children: [
    {
      path: "article",
      component: Article,
      meta: {
        layout: "nav",
      },
    },
  ],
};

export default moduleRoute;
