const Module = () => import("./Module.vue");
const Article = () => import("./views/Article.vue");
const ArticleDetail = () => import("./views/ArticleDetail.vue");

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
      component: ArticleDetail,
      meta: {
        layout: "nav",
      },
    },
  ],
};

export default moduleRoute;
