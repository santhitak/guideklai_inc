<style>
  .dropdown:hover .dropdown-menu {
  display: block;
}

</style>
<template>

  <div class="flex justify-between">
    
    <div class="flex-1">
      <div class="p-10">

</div>
      <aside class="w-64" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >Post</span
      >
      <ul class="space-y-1 my-4">
        <li>
          <a
            @click="getArticle()"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">All</span>
          </a>
        </li>
        <li>
          <a
            @click="FilterArticle('Restaurants')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Restaurants</span>
          </a>
        </li>
        <li>
          <a
            @click="FilterArticle('Tour')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Tour</span>
          </a>
        </li>
        <li>
          <a
            @click="FilterArticle('Guide')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Guide</span>
          </a>
        </li>
        <li>
          <a
            @click="FilterArticle('Rest')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Rest</span>
          </a>
        </li>
        <li>
          <a
            @click="FilterArticle('Attraction')"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Attraction</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span class="ml-3 font-medium">Store</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >
        Rating
      </span>
      <div class="my-4">
        <a
          href="#"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
        >
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <EmptyStar />
          <p class="ml-2 text-sm font-medium text-gray-500">
            & up
          </p>
        </a>
        <a
          href=" #" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
        >
          <FullStar />
          <FullStar />
          <FullStar />
          <EmptyStar />
          <EmptyStar />
          <p class="ml-2 text-sm font-medium text-gray-500">
            & up
          </p>
        </a>
        <a
          href="#"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FullStar />
          <FullStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <p class="ml-2 text-sm font-medium text-gray-500">
            & up
          </p>
        </a>
        <a
          href="#"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FullStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <EmptyStar />
          <p class="ml-2 text-sm font-medium text-gray-500">& up</p>
        </a>
      </div>
    </div>
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <span
        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
      >Suitability</span
      >
      <fieldset class="my-4">
        <legend class="sr-only">age</legend>
        <div class="flex items-center mb-4">
          <input
            checked
            id="suitable_all"
            type="radio"
            name="suitable"
            value="everyone"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_all"
            aria-describedby="suitable_all"
          />
          <label
            for="suitable_all"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Everyone
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="suitable_elder"
            type="radio"
            name="suitable"
            value="elder"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_elder"
            aria-describedby="suitable_elder"
          />
          <label
            for="suitable_elder"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Elder
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="suitable_adult"
            type="radio"
            name="suitable"
            value="adult"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_adult"
            aria-describedby="suitable_adult"
          />
          <label
            for="suitable_adult"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Adult
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="suitable_teen"
            type="radio"
            name="suitable"
            value="teen"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_teen"
            aria-describedby="suitable_teen"
          />
          <label
            for="suitable_teen"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Teen
          </label>
        </div>

        <div class="flex items-center mb-4">
          <input
            id="suitable_kid"
            type="radio"
            name="suitable"
            value="kid"
            class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="suitable_kid"
            aria-describedby="suitable_kid"
          />
          <label
            for="suitable_kid"
            class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Kid
          </label>
        </div>
      </fieldset>
    </div>
  </aside>
    </div>
    <div class="flex-auto">
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
          <a-tag color="pink">{{articles.type_article}}</a-tag>
          <a-tag v-if="articles.type_article == 'Promote'" color="red">{{articles.type_promote}}</a-tag>
          <a-tag v-else color="red">{{articles.category}}</a-tag>
        </div>
      </a>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FullStar from "@/components/shared/Filter/components/FullStar";
import EmptyStar from "@/components/shared/Filter/components/EmptyStar";
export default {
  name: "PreviewArticle",
  components: { EmptyStar, FullStar },
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
    async FilterArticle(type) {
      try {
        const response = await axios.get(`http://localhost:4000/article/filter/${type}`);
        this.Article = response.data;
        console.log(this.Article);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
