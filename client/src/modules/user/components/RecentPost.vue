<template>
  <a-space class="flex-1" direction="vertical" style="margin: auto 8rem;">
    <div v-for="post in articles" class="w-full" v-bind:key="post.article_id">
      <router-link :to="`/article/${post.article_id}/`">
        <a
          style="min-height: 10rem; justify-content: space-evenly"
          class="min-w-full mb-3 flex justify-evenly items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <div v-for="img in images" v-bind:key="img.article_id" v-show="img.article_id === post.article_id">
            <img
              class="object-cover mx-4 h-96 rounded-lg md:h-auto md:w-48"
              :src="`http://localhost:4000/static/article/${img.image}`"
              alt=""
            />
          </div>
          <div class="flex flex-col p-4 leading-normal">
            <div class="flex justify-between">
              <h5
                v-if="post.type_article === 'Review'"
                class="text-2xl font-bold tracking-tight text-gray-900"
              >
                {{ post.title_review }}
              </h5>
              <h5
                v-else
                class="text-2xl font-bold tracking-tight text-gray-900"
              >
                {{ post.title_promote }}
              </h5>
              <p
                v-if="post.rating_avg != null"
                class="h-6 mt-2 bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"
              >
                {{ post.rating_avg }}
              </p>
              <p
                v-else
                class="h-6 mt-2 bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"
              >
                0
              </p>
            </div>
            <p class="text-gray-600 font-semibold text-sm">
              created by {{ post.username }}
            </p>
            <p
              style="
                white-space: nowrap;
                width: 600px;
                overflow: hidden;
                text-overflow: ellipsis;
              "
              class="mb-3 font-normal text-gray-600"
            >
              {{ post.information }}
            </p>
            <a-space>
              <p class="text-gray-400 mt-2.5">Categories:</p>
              <div v-if="post.type_promote">
                <a-tag color="cyan" style="width: fit-content"> Post</a-tag>
                <a-tag
                  :color="
                    post.type_promote === 'Tour'
                      ? 'pink'
                      : post.type_promote === 'Attraction'
                      ? 'blue'
                      : post.type_promote === 'Rest'
                      ? 'orange'
                      : 'purple'
                  "
                  style="width: fit-content"
                >
                  {{
                    post.type_promote === "Rest" ? "Hotel" : post.type_promote
                  }}
                </a-tag>
              </div>
              <div v-else>
                <a-tag color="green" style="width: fit-content"> Review</a-tag>
                <a-tag
                  :color="
                    post.category === 'Tour'
                      ? 'pink'
                      : post.category === 'Attraction'
                      ? 'blue'
                      : post.category === 'Rest'
                      ? 'orange'
                      : 'purple'
                  "
                  style="width: fit-content"
                >
                  {{ post.category === "Rest" ? "Hotel" : post.category }}
                </a-tag>
              </div>
            </a-space>
            <p class="text-gray-400 text-sm">{{ new Date(post.create_time).toLocaleString("TH") }}</p>
          </div>
        </a>
      </router-link>
    </div>
  </a-space>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "RecentPost",
  props: ["user"],
  data() {
    return {
      articles: [],
      images: []
    };
  },
  created() {
    this.getArticle();
    this.getImages();
  },
  methods: {
    async getArticle() {
      try {
        const response = await axios.get(
          `http://localhost:4000/article/recent/${this.user.member_id}`
        );
        this.articles = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getImages() {
      try {
        const response = await axios.get("http://localhost:4000/images");
        this.images = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped></style>
