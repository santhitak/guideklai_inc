<template>
  <div style="margin: 2rem 0">
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
        <p>
          {{article.view}}
        </p>
        <a-space>
          <a-avatar>{{ article.firstname.substring(0, 1) }}</a-avatar>
          <p class="text-medium font-semibold mt-2.5">
            {{ article.firstname + " " + article.lastname }}
          </p>
        </a-space>
      </div>
      <a-divider />
      <div
        style="display: flex; align-items: center; "
        class="flex-col"
      >
        <img
          style="width: 50%"
          class="my-4 rounded-xl"
          :src="article.image"
          alt=""
        />
        <div class="my-12" style="width: 60%">
          <p class="text-center">{{ article.information }}</p>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <span @click="giveStar(this.value)" v-if="this.star == false && this.user">
        <a-rate v-model:value="value" allow-half />
      </span>
      <span v-else>
        <a-rate :value="this.star" disabled allow-half/>
      </span>   
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
                  <time datetime="2022-01-20 19:00">{{new Date(comment.time).toLocaleString('TH') }}</time>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </article>
      <div class="mt-4">
    <form>
      <div
        class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            v-model="commentInput"
            
            id="comment"
            rows="4"
            class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required=""
          ></textarea>
        </div>
        <div
          class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600"
        >
          <div class="flex pl-0 space-x-1 sm:pl-2">
            <button
              type="button"
              class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <button
            @click="postComment"
            class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Post comment
          </button>
        </div>
      </div>
    </form>
    <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
      <span class="text-blue-600 dark:text-blue-500 hover:underline"
      >Polite and Consideration</span
      >.
    </p>
  </div>
    </div>
    
  </div>
  
</template>

<script>
import axios from "axios";
import { ref } from 'vue';
// const ;
export default {
  name: "ShowArticleDetail",
  props: ['user'],
  data() {
    return {
      articles: [],
      comments: [],
      star: [],
      // nlBEFormatter : new Intl.DateTimeFormat('nl-BE'),
      commentInput:"",
      articleid: this.$route.params.id
    };
  },
  created() {
    this.getArticle();
    this.getComment();
  },
 setup() {
    const value = ref(0);
    return {
      value,
    };
  },
  methods: {
    async postComment(){
      axios
        .post(`http://localhost:4000/${this.articles[0].article_id}/comments/${this.user.member_id}`, {
          comment: this.commentInput,
        })
        .then((response) => {
          this.commentInput = "";
          this.comments.push(response.data);
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
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
      this.getStar()
    },
    async getStar() {
      try {
        const response = await axios.get(
          `http://localhost:4000/star/${this.articleid}/${this.user.member_id}`
        );
        this.star = response.data[0].rating;
        console.log(this.articles);
      } catch (err) {
        console.log(err);
      }
    },
    async giveStar() {
      axios
        .post(`http://localhost:4000/star/${this.articleid}/${this.user.member_id}/${this.value}`)
        location.reload()
        .catch((error) => {
          this.error = error.response.data.message;
        });
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
