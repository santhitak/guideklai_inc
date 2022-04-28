<template>
  <div>
    <div
      v-for="articles in Article"
      class="w-full"
      v-bind:key="articles.article_id"
    >
      <a
        :href="`/article/${articles.article_id}/`"
        style="min-height: 10rem; justify-content: space-evenly"
        class="min-w-full mb-3 flex justify-evenly items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <img
          class="object-cover mx-4 h-96 rounded-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          :src="articles.image"
          alt=""
        />
        <div class="flex flex-col p-4 leading-normal">
          <div class="flex justify-between">
            <h5 v-if="articles.type_article == 'Review'" class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {{ articles.title_review }}
            </h5>
            <h5 v-else class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {{ articles.title_promote }}
            </h5>

            <p
              v-if="articles.rating != null"
              class="h-6 mt-2 bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"
            >
              {{ articles.rating }}
            </p>
          </div>
          <p
            style="
              white-space: nowrap;
              width: 600px;
              overflow: hidden;
              text-overflow: ellipsis;
            "
            class="mb-3 font-normal text-gray-600"
          >
            {{ articles.information }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PreviewArticle",
  data() {
    return {
      Article: [],
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      try {
        const response = await axios.get("http://localhost:4000/article");
        this.Article = response.data;
        console.log(this.Article);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
