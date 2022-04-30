<template>
  <div style="margin: 2rem 0;">
    <div
      v-for="article in articles"
      class="w-full"
      v-bind:key="article.article_id"
    >
      <div
        style="
          display: flex;
          align-items: center;
          align-content: center;
          width: 100%;
          justify-content: space-around;
        "
      >
        <h1
          v-if="article.type_article === 'Promote'"
          class="text-4xl font-bold"
          style="text-transform: capitalize"
        >
          {{ article.title_promote }}
        </h1>
        <h1
          v-else
          class="text-4xl font-bold"
          style="text-transform: capitalize"
        >
          {{ article.title_review }}
        </h1>
        <a-space>
          <a-avatar>{{ article.firstname.substring(0, 1) }}</a-avatar>
          <p class="text-medium font-semibold mt-2.5">
            {{ article.firstname + " " + article.lastname }}
          </p>
        </a-space>
      </div>
      <a-divider />
      <div style="display: flex; align-items: center" class="flex-col">
        <img
          style="width: 50%"
          class="my-4 rounded-xl"
          :src="article.image"
          alt=""
        />
        <div class="my-12" style="width: 60%">
          <p class="text-left">{{ article.information }}</p>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <p class="text-xl font-bold">Comments</p>
      <article
        v-for="comment in comments"
        v-bind:key="comment.article_id"
        class="md:gap-8 md:grid md:grid-cols-3"
      >
        <div>
          <div class="flex items-center mb-1 space-x-4">
            <a-avatar>{{ comment.firstname.substring(0, 1) }}</a-avatar>
            <div class="space-y-1 mt-3 font-medium dark:text-white">
              <p>{{ comment.firstname + " " + comment.lastname }}</p>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <p class="text-bold text-black mb-2 dark:text-gray-400">
            {{ comment.comment }}
          </p>
          <div class="flex items-start mb-5">
            <div class="pr-4">
              <footer>
                <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">
                  <time datetime="2022-01-20 19:00">January 20, 2022</time>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </article>
      <CommentBox />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentBox from "@/components/shared/CommentBox";

export default {
  name: "ShowArticleDetail",
  components: { CommentBox },
  data() {
    return {
      articles: [],
      comments: [],
      articleid: this.$route.params.id
    };
  },
  created() {
    this.getArticle();
    this.getComment();
  },
  methods: {
    async getArticle() {
      try {
        const response = await axios.get(
          `http://localhost:4000/article/${this.articleid}`
        );
        this.articles = response.data;
        console.log(this.articles);
      } catch (err) {
        console.log(err);
      }
    },
    async getComment() {
      try {
        const comment = await axios.get(
          `http://localhost:4000/article/comment/${this.articleid}`
        );
        this.comments = comment.data;
        console.log(this.articles);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
