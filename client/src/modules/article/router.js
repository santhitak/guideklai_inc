const Module = () => import("./Module.vue");
const Article = () => import("./views/article.vue");
const Articledetail = () => import("./views/articledetail.vue");
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
    {
      path: "article/:id",
      component: Articledetail,
      meta: {
        layout: "nav",
      },
    },
  ],
};

export default moduleRoute;
