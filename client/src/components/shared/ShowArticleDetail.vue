<template>
  <div>
    <div
      v-for="articles in Article"
      class="w-full"
      v-bind:key="articles.article_id"
    >
      <div style="display: flex; align-items: center" class="flex-col">
        <h1 v-if="articles.type_article == 'Promote'" class="text-xl font-black">{{ articles.title_promote }}</h1>
        <h1 v-else class="text-xl font-black">{{ articles.title_review }}</h1>
        <img style="width: 800px" :src="articles.image" alt="" />
      </div>
      <div class="mt-4">
        <p class="text-left">{{ articles.information }}</p>
      </div>

      <!-- comment box -->
      <CommentBox></CommentBox>
    </div>
    <!-- comment -->
    <div class="mt-4">
      <article
        v-for="comments in Comment"
        v-bind:key="comments.article_id"
        class="md:gap-8 md:grid md:grid-cols-3"
      >
        <div>
          <div class="flex items-center mb-6 space-x-4">
            <img
              class="w-10 h-10 rounded-full"
              :src="comments.profile_pic"
              alt=""
            />
            <div class="space-y-1 font-medium dark:text-white">
              <p>{{ comments.firstname + " " + comments.lastname }}</p>
            </div>
          </div>
        </div>
        <div class="col-span-2 mt-6 md:mt-0">
          <div class="flex items-start mb-5">
            <div class="pr-4">
              <footer>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Reviewed:
                  <time datetime="2022-01-20 19:00">January 20, 2022</time>
                </p>
              </footer>
            </div>
          </div>
          <p class="text-bold text-black mb-2 dark:text-gray-400">
            {{ comments.comment }}
          </p>
        </div>
      </article>
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
      Article: [],
      Comment: [],
      articleid: this.$route.params.id,
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
        this.Article = response.data;
        console.log(this.Article);
      } catch (err) {
        console.log(err);
      }
    },
    async getComment() {
      try {
        const comment = await axios.get(
          `http://localhost:4000/article/comment/${this.articleid}`
        );
        this.Comment = comment.data;
        console.log(this.Article);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
