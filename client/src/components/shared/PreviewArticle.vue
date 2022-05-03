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
            @click="this.star = 0"
          />
        </div>
        <aside aria-label="Sidebar">
          <span
            class="self-center text-sm font-semibold whitespace-nowrap text-gray-500"
          >
            {{ filteredList.length }} of {{ count }} results
          </span>
          <div
            class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"
          >
            <span
              class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >
              Article
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
                  <span class="ml-3 font-medium">Tours</span>
                </a>
              </li>
              <li>
                <a
                  @click="FilterArticle('Guide')"
                  class="flex items-center p-2 text-md text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3 font-medium">Guides</span>
                </a>
              </li>
              <li>
                <a
                  @click="FilterArticle('Rest')"
                  class="flex items-center p-2 text-md text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3 font-medium">Hotels</span>
                </a>
              </li>
              <li>
                <a
                  @click="FilterArticle('Attraction')"
                  class="flex items-center p-2 text-md text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3 font-medium">Attractions</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="overflow-y-auto px-3 bg-gray-50 rounded">
            <div
              class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >
              Article Type
            </div>
            <div class="my-3">
              <a-radio-group v-model:value="value" name="radioGroup">
                <a-radio @click="filteredList1()" value="">
                  <p class="ml-2 text-sm font-medium text-gray-900">All</p>
                </a-radio>
                <br />
                <a-radio @click="filteredList1()" value="Promote">
                  <p class="ml-2 text-sm font-medium text-gray-900">Post</p>
                </a-radio>
                <br />
                <a-radio @click="filteredList1()" value="Review">
                  <p class="ml-2 text-sm font-medium text-gray-900">Review</p>
                </a-radio>
              </a-radio-group>
            </div>
          </div>
          <div class="overflow-y-auto px-3 bg-gray-50 rounded">
            <span
              class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >
              Rating
            </span>
            <div class="my-3">
              <button
                @click="this.star = 4"
                :class="[star === 4 ? starActive : starNormal]"
              >
                <FullStar />
                <FullStar />
                <FullStar />
                <FullStar />
                <EmptyStar />
                <span
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
                  & up
                </span>
              </button>
              <button
                @click="this.star = 3"
                :class="[star === 3 ? starActive : starNormal]"
              >
                <FullStar />
                <FullStar />
                <FullStar />
                <EmptyStar />
                <EmptyStar />
                <span
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
                  & up
                </span>
              </button>
              <button
                @click="this.star = 2"
                :class="[star === 2 ? starActive : starNormal]"
              >
                <FullStar />
                <FullStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <span
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
                  & up
                </span>
              </button>
              <button
                type="button"
                @click="this.star = 1"
                :class="[star === 1 ? starActive : starNormal]"
              >
                <FullStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <span
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
                  & up
                </span>
              </button>
              <button
                @click="this.star = 0"
                :class="[star === 0 ? starActive : starNormal]"
              >
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <span
                  class="text-sm font-medium text-gray-500"
                  style="margin: 0 0.5rem"
                >
                  & up
                </span>
              </button>
            </div>
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
              class="object-cover mx-4 h-96 rounded-lg md:h-auto md:w-48"
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
                  v-if="articles.rating_avg != null"
                  class="h-6 mt-2 bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"
                >
                  {{ articles.rating_avg }}
                </p>
                <p
                  v-else
                  class="h-6 mt-2 bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded"
                >
                  0
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
                  <a-tag color="cyan" style="width: fit-content"> Post</a-tag>
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
                    {{
                      articles.type_promote === "Rest"
                        ? "Hotel"
                        : articles.type_promote
                    }}
                  </a-tag>
                </div>
                <div v-else>
                  <a-tag color="green" style="width: fit-content">
                    Review
                  </a-tag>
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
                    {{
                      articles.category === "Rest" ? "Hotel" : articles.category
                    }}
                  </a-tag>
                </div>
              </a-space>
            </div>
          </a>
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
import { ref } from "vue";

export default {
  name: "PreviewArticle",
  components: { EmptyStar, FullStar, SearchOutlined },
  data() {
    return {
      search: "",
      pageOfItems: [],
      postList: [],
      Article: [],
      FilterList: [],
      star: 0,
      count: 0,
      starNormal:
        "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
      starActive:
        "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:hover:bg-gray-700"
    };
  },
  created() {
    this.getArticle();
  },
  setup() {
    const value = ref("");
    return {
      value
    };
  },
  computed: {
    filteredList1() {
      // alert(e)
      return this.Article.filter((post) => {
        return (
          post.rating_avg >= this.star && post.type_article.includes(this.value)
        );
      });
    },

    filteredList() {
      return this.filteredList1.filter((post) => {
        this.FilterList =
          post.title_promote
            ?.toLowerCase()
            .includes(this.search?.toLowerCase()) ||
          post.title_review?.toLowerCase().includes(this.search?.toLowerCase());
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
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
    },
    async getArticle() {
      this.star = 0;
      try {
        const response = await axios.get("http://localhost:4000/article");
        this.Article = response.data;
        this.count = response.data.length;
      } catch (err) {
        console.log(err);
      }
    },
    async FilterArticle(type) {
      this.star = 0;
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