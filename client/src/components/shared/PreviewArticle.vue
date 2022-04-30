<template>
  <div>
    <div class="flex justify-between mt-10">
      <div class="flex-none">
        <div class="mb-6 flex">
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
          >
            <search-outlined />
          </span>
          <input
            class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
            type="text"
            v-model="search"
            placeholder="Search title"
          />
        </div>
        <aside aria-label="Sidebar">
          <div
            class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"
          >
            <span
              class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >
              Post
            </span>
            <ul class="space-y-1 my-3">
              <li>
                <a
                  @click="getArticle()"
                  class="flex items-center p-2 text-md text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3 font-medium">All</span>
                </a>
              </li>
              <li>
                <a
                  @click="FilterArticle('Tour')"
                  class="flex items-center p-2 text-md text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3 font-medium">Tour</span>
                </a>
              </li>
              <li>
                <a
                  @click="FilterArticle('Guide')"
                  class="flex items-center p-2 text-md text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3 font-medium">Guide</span>
                </a>
              </li>
              <li>
                <a
                  @click="FilterArticle('Rest')"
                  class="flex items-center p-2 text-md text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3 font-medium">Rest</span>
                </a>
              </li>
              <li>
                <a
                  @click="FilterArticle('Attraction')"
                  class="flex items-center p-2 text-md text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3 font-medium">Attraction</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="overflow-y-auto px-3 bg-gray-50 rounded">
            <span
              class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >
              Rating
            </span>
            <div class="my-3">
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <EmptyStar />
                <p
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
                  & up
                </p>
              </a>
              <a
                href=" #"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <FullStar />
                <FullStar />
                <FullStar />
                <EmptyStar />
                <EmptyStar />
                <p
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
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
                <p
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
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
                <p
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
                  & up
                </p>
              </a>
            </div>
          </div>
          <div
            class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"
          >
            <span
              class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
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
      <a-space class="flex-1" direction="vertical" style="margin: auto 8rem">
        <div
          v-for="articles in filteredList"
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
                <h5
                  v-if="articles.type_article === 'Review'"
                  class="text-2xl font-bold tracking-tight text-gray-900"
                >
                  {{ articles.title_review }}
                </h5>
                <h5
                  v-else
                  class="text-2xl font-bold tracking-tight text-gray-900"
                >
                  {{ articles.title_promote }}
                </h5>
                <p
                  v-if="articles.rating != null"
                  class="h-6 mt-2 bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"
                >
                  {{ articles.rating }}
                </p>
              </div>
              <p class="text-gray-600 font-semibold text-sm">
                created by {{ articles.username }}
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
                {{ articles.information }}
              </p>
              <a-space>
                <p class="text-gray-400 mt-2.5">Categories:</p>
                <div v-if="articles.type_promote">
                  <a-tag color="cyan" style="width: fit-content">
                    Review
                  </a-tag>
                  <a-tag
                    :color="
                      articles.type_promote === 'Tour'
                        ? 'pink'
                        : articles.type_promote === 'Attraction'
                        ? 'blue'
                        : articles.type_promote === 'Rest'
                        ? 'orange'
                        : 'purple'
                    "
                    style="width: fit-content"
                  >
                    {{ articles.type_promote }}
                  </a-tag>
                </div>
                <div v-else>
                  <a-tag color="green" style="width: fit-content"> Post</a-tag>
                  <a-tag
                    :color="
                      articles.category === 'Tour'
                        ? 'pink'
                        : articles.category === 'Attraction'
                        ? 'blue'
                        : articles.category === 'Rest'
                        ? 'orange'
                        : 'purple'
                    "
                    style="width: fit-content"
                  >
                    {{ articles.category }}
                  </a-tag>
                </div>
              </a-space>
            </div>
          </a>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-sm text-gray-700 dark:text-gray-400">
            Showing
            <span class="font-semibold text-gray-900 dark:text-white">1</span>
            to
            <span class="font-semibold text-gray-900 dark:text-white">10</span>
            of
            <span class="font-semibold text-gray-900 dark:text-white">{{
                articles
              }}</span>
            Entries
          </span>
          <div class="inline-flex mt-2 xs:mt-0">
            <button
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                class="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Prev
            </button>
            <button
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
              <svg
                class="ml-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </a-space>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import FullStar from "@/components/shared/Filter/components/FullStar";
import EmptyStar from "@/components/shared/Filter/components/EmptyStar";
import { SearchOutlined } from "@ant-design/icons-vue";

export default {
  name: "PreviewArticle",
  components: { EmptyStar, FullStar, SearchOutlined },
  data() {
    return {
      search: "",
      postList: [],
      Article: []
    };
  },
  created() {
    this.getArticle();
  },
  computed: {
    filteredList() {
      return this.Article.filter((post) => {
        return (
          post.title_promote
            ?.toLowerCase()
            .includes(this.search?.toLowerCase()) ||
          post.title_review?.toLowerCase().includes(this.search?.toLowerCase())
        );
      });
    }
  },
  methods: {
    async getArticle() {
      try {
        const response = await axios.get("http://localhost:4000/article");
        this.Article = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async FilterArticle(type) {
      try {
        const response = await axios.get(
          `http://localhost:4000/article/filter/${type}`
        );
        this.Article = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
