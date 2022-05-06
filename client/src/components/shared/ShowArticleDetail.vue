<template>
  <div style="margin: 5rem 0">
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
          {{ article.view }}
        </p>
        <a-space>
          <a-avatar>{{ article.firstname.substring(0, 1) }}</a-avatar>
          <p class="text-medium font-semibold mt-2.5">
            {{ article.firstname + " " + article.lastname }}
          </p>
        </a-space>
      </div>
      <a-divider />
      <div style="display: flex; align-items: center" class="flex-col">
        <a-row
          type="flex"
          justify="space-evenly"
          align="middle"
          :gutter="[16, 16]"
        >
          <a-col :span="8" v-for="img in Images" v-bind:key="img.article_id">
            <img
              style="width: 350px; height: auto"
              class="my-4 rounded-xl"
              :src="`http://localhost:4000/static/article/${img.image}`"
              alt=""
            />
          </a-col>
        </a-row>
        <div class="my-12" style="width: 60%">
          <p class="text-center">{{ article.information }}</p>
        </div>
      </div>
      <div class="my-12 flex justify-center" style="width: 100%">
        <div
          style="margin-right: 2rem"
          class="relative overflow-x-auto shadow-md sm:rounded-lg"
        >
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
            <tr>
              <th scope="col" class="px-6 py-3">About</th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
            </thead>
            <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Type
              </th>
              <td class="px-6 py-4">
                {{ category }}
                {{ type }}
              </td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Author
              </th>
              <td class="px-6 py-4">
                {{ user.firstname + " " + user.lastname }}
              </td>
            </tr>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Created on
              </th>
              <td class="px-6 py-4">
                {{ new Date(article.create_time).toLocaleDateString("TH") }}
              </td>
            </tr>
            </tbody>
          </table>
          <div
            class="block p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-sm"
            v-if="article.type_article === 'Promote'"
            style="margin-top: 1rem"
          >
            <div
              v-if="
              articleType[0]?.category === 'Attraction' ||
              articleType[0]?.type_promote === 'Attraction'
            "
            >
              <div class="font-semibold">
                province_name : {{ articleType[0]?.province_name }}
              </div>
              <div class="font-semibold">
                office_hour : {{ articleType[0]?.office_hour }}
              </div>
              <div class="font-semibold">
                attraction_price : {{ articleType[0]?.attraction_price }}
              </div>
              <div class="font-semibold">image : {{ articleType[0]?.image }}</div>
              <div
                class="font-semibold"
                v-if="articles[0]?.type_article === 'Promote'"
              >
                Phone:{{ articleType[0]?.phone_number }} Email:{{
                  articleType[0]?.email
                }}
              </div>
            </div>
            <div
              v-if="
              articleType[0]?.category === 'Guide' ||
              articleType[0]?.type_promote === 'Guide'
            "
            >
              <div class="font-semibold">
                Guide Name : {{ articleType[0]?.firstname }}
                {{ articleType[0]?.lastname }}
              </div>
              <div class="font-semibold">Age : {{ articleType[0]?.age }}</div>
              <div class="font-semibold">
                Gender : {{ articleType[0]?.gender }}
              </div>
              <div class="font-semibold">
                Language :
                <span v-for="lang in language" v-bind:key="lang"
                >{{ lang }},
              </span>
              </div>
              <div
                class="font-semibold"
                v-if="articles[0]?.type_article === 'Promote'"
              >
                <p style="margin: 0">Phone : {{ articleType[0]?.phone_number }}</p>
                <p>Email : {{ articleType[0]?.email }}</p>
              </div>
            </div>
            <div
              v-if="
              articleType[0]?.category === 'Rest' ||
              articleType[0]?.type_promote === 'Rest'
            "
            >
              <div class="font-semibold">
                Company Name : {{ articleType[0]?.company_name }}
              </div>
              <div class="font-semibold">
                Price : {{ articleType[0]?.lower_price }} -
                {{ articleType[0]?.higher_price }}
              </div>
              <div
                class="font-semibold"
                v-if="articles[0]?.type_article === 'Promote'"
              >
                <p style="margin: 0">Phone : {{ articleType[0]?.phone_number }}</p>
                <p>Email : {{ articleType[0]?.email }}</p>
              </div>
            </div>
            <div
              v-if="
              articleType[0]?.category === 'Tour' ||
              articleType[0]?.type_promote === 'Tour'
            "
            >
              <div class="font-semibold">
                Company Name : {{ articleType[0]?.company_name }}
              </div>
              <div class="font-semibold">
                Language :
                <span v-for="lang in language" v-bind:key="lang"
                >{{ lang }},
              </span>
              </div>
              <div class="font-semibold">
                Province :
                {{
                  articleType[0]?.province_name.substring(
                    0,
                    articleType[0]?.province_name.length - 9
                  )
                }}
              </div>
              <div class="font-semibold">
                Price : {{ articleType[0]?.tour_price }}
              </div>
              <div
                class="font-semibold"
                v-if="articles[0]?.type_article === 'Promote'"
              >
                <p style="margin: 0">Phone : {{ articleType[0]?.phone_number }}</p>
                <p>Email : {{ articleType[0]?.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <div>
        <p class="text-xl font-bold inline mr-3">Your rating</p>
        <span
          @click="giveStar(this.value)"
          v-if="this.star.length === 0 && this.user"
        >
          <a-rate v-model:value="value" allow-half />
        </span>
        <span v-else>
          <a-rate :value="this.star" disabled allow-half />
        </span>
      </div>
      <p class="text-xl font-bold">Comments</p>
      <article
        v-for="(comment, index) in comments"
        v-bind:key="comment.article_id"
        class="md:gap-8 md:grid md:grid-cols-3"
        v-bind:class="{
          'block p-6 bg-white rounded-lg border border-gray-200 shadow-md':
            editToggle !== -1 &&
            comment.member_id === user.member_id &&
            index === editToggle,
        }"
      >
        <div>
          <div class="flex items-center mb-1 space-x-4">
            <a-avatar>{{ comment.firstname.substring(0, 1) }}</a-avatar>
            <div class="space-y-1 mt-3 font-medium dark:text-white">
              <p>{{ comment.firstname + " " + comment.lastname }}</p>
            </div>
            <p
              v-if="isCommentOwner(comment)"
              class="mt-2 cursor-pointer"
              @click="
                editToggle = index;
                editCommentMessage = comment.comment;
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </p>
          </div>
        </div>
        <div class="col-span-2">
          <p class="text-bold text-black mb-2 dark:text-gray-400">
            {{ comment.comment }}
          </p>
          <div v-if="index === editToggle" class="media-content">
            <div class="content">
              <textarea
                rows="3"
                v-model="editCommentMessage"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
              />
            </div>
            <div class="level-item flex justify-end my-3">
              <button
                @click="saveEditComment(comment.comment_id, index)"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              >
                Save Comment
              </button>
              <button
                @click="editToggle = -1"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 mr-2 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
              >
                Cancel
              </button>
              <button
                v-if="isCommentOwner(comment)"
                @click="deleteComment(comment.comment_id, index)"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                <span>Delete</span>
              </button>
            </div>
          </div>
          <div class="flex items-start mb-5">
            <div class="pr-4">
              <footer>
                <p class="mb-2 text-xs text-gray-500 dark:text-gray-400">
                  <time datetime="2022-01-20 19:00">
                    {{ new Date(comment.time).toLocaleString("TH") }}
                  </time>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </article>
      <div class="mt-4">
        <form v-if="this.user">
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
              class="flex items-center justify-end px-3 py-2 border-t dark:border-gray-600"
            >
              <button
                @click="postComment"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post comment
              </button>
            </div>
          </div>
          <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
            Remember, contributions to this topic should follow our
            <span class="text-blue-600 dark:text-blue-500 hover:underline">
              Polite and Consideration </span
            >.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import { ref } from "vue";

export default {
  name: "ShowArticleDetail",
  props: ["user"],
  components: {},
  data() {
    return {
      editToggle: -1,
      editCommentMessage: "",
      articles: [],
      comments: [],
      articleTour: [],
      articleType: [],
      articleAttraction: [],
      articleRest: [],
      star: [],
      language: [],
      Images: [],
      type: "",
      category: "",
      commentInput: "",
      article_id: this.$route.params.id
    };
  },
  created() {
    this.getArticle();
    this.getImages();
    this.getComment();
  },
  setup() {
    const value = ref(0);
    return {
      value
    };
  },
  methods: {
    saveEditComment(commentId, index) {
      console.log(this.comments[index].comment);
      axios
        .put(`http://localhost:4000/comments/${commentId}`, {
          comment: this.editCommentMessage
        })
        .then((response) => {
          this.comments[index].comment = response.data.comment;
          this.editToggle = -1;
        })
        .catch((error) => {
          this.error = error.message;
        });
      console.log(this.comments[index].comment);
    },
    deleteComment(commentId, index) {
      const result = confirm(`Are you sure you want to delete this comment`);
      if (result) {
        axios
          .delete(`http://localhost:4000/comments/${commentId}`)
          .then((response) => {
            console.log(response);
            this.comments.splice(index, 1);
          })
          .catch((error) => {
            this.error = error.message;
          });
      }
    },
    async postComment() {
      axios
        .post(
          `http://localhost:4000/${this.articles[0].article_id}/comments/${this.user.member_id}`,
          {
            comment: this.commentInput
          }
        )
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
          `http://localhost:4000/article/${this.article_id}`
        );
        this.articles = response.data;
        this.type = this.articles[0].type_promote;
        this.category = this.articles[0].category;

        this.type.toString();
        this.category.toString();
        console.log(this.category);
      } catch (err) {
        console.log(err);
      }
      await this.getArticleType();
      await this.getStar();
    },
    async getImages() {
      try {
        const response = await axios.get(
          `http://localhost:4000/images/${this.article_id}`
        );
        this.Images = response.data;
        this.type.toString();
        this.category.toString();
        console.log(this.category);
      } catch (err) {
        console.log(err);
      }
      await this.getArticleType();
      await this.getStar();
    },
    async getArticleType() {
      try {
        const response = await axios.get(
          `http://localhost:4000/article/show/${this.category}/${this.type}/${this.article_id}`
        );
        this.articleType = response.data;
        for (let i = 0; i < this.articleType.length; i++) {
          this.language.push(this.articleType[i].language_name);
        }
        console.log(this.articleType);
      } catch (err) {
        console.log(err);
      }
      await this.getStar();
    },

    async getStar() {
      try {
        const response = await axios.get(
          `http://localhost:4000/star/${this.article_id}/${this.user.member_id}`
        );
        this.star = response.data[0].rating;
        console.log(this.articles);
      } catch (err) {
        console.log(err);
      }
    },
    async giveStar() {
      try {
        await axios.post(
          `http://localhost:4000/star/${this.article_id}/${this.user.member_id}/give`,
          {
            star: this.value
          }
        );
        location.reload();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },

    async getComment() {
      try {
        const comment = await axios.get(
          `http://localhost:4000/article/comment/${this.article_id}`
        );
        this.comments = comment.data;
        console.log(this.articles);
      } catch (err) {
        console.log(err);
      }
    },
    isCommentOwner(comment) {
      if (!this.user) return false;
      return comment.member_id === this.user.member_id;
    }
  }
};
</script>
