<template>
  <a-space class="flex-1" direction="vertical" style="margin: auto 8rem">
    <div v-for="post in articles" class="w-full" v-bind:key="post.article_id">
      <router-link :to="`/article/${post.article_id}/`">
        <a
          style="min-height: 10rem; justify-content: space-evenly"
          class="min-w-full mb-3 flex justify-evenly items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover mx-4 h-96 rounded-lg md:h-auto md:w-48"
            :src="post.image"
            alt=""
          />
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
              <a-button v-if="post.type_article === 'Review'" class="inline-flex items-center" type="primary" danger @click="deleteArticle(post.article_id,post.type_article,post.category)">Delete</a-button>
              <a-button v-else class="inline-flex items-center" type="primary" danger @click="deleteArticle(post.article_id,post.type_article,post.type_promote)">Delete</a-button>
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

            {{ new Date(post.create_time).toLocaleString("TH") }}
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
      articles: []
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      try {
        const response = await axios.get(
          `http://localhost:4000/article/recent/${this.user.member_id}`
        );
        this.articles = response.data;
        // console.log(this.articles[0].article_id);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteArticle(article,article_type,type) {
      let comfirmDeleteArticle = confirm("Are you sure to delete this Article?");
      if (comfirmDeleteArticle == true) {
      try {
        axios.delete(
          "http://localhost:4000/article/delete/"+article+"/"+article_type+"/"+type
        );
        location.reload();
        console.log("delete article successfully!! ");
      } catch (err) {
        console.log(err);
      }
      }
      //  let comfirmDeleteImage = confirm("Are you sure to delete this image");
      // if (comfirmDeleteImage == true) {
      //   axios
      //     .delete("http://localhost:3000/image/" + imageId)
      //     .then((response) => {
      //       console.log("delete image ", response);
      //       this.$router.push({ path: "/" });
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     });
      // }
    }
  }
};
</script>

<style scoped></style>
