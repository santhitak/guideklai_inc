const Module = () => import("./Module.vue");
const Article = () => import("./views/Article.vue");
const ArticleDetail = () => import("./views/ArticleDetail.vue");

const moduleRoute = {
  path: "/",
  component: Module,
  children: [
    {
      path: "/article",
      component: Article,
    },
    {
      path: "/article/:id",
      component: ArticleDetail,
    },
  ],
};

export default moduleRoute;
