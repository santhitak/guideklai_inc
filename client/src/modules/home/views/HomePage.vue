<template>
  <div>
    <DefaultLayout :user="user" />
    <div class="bar-panel">
      <LinkedBar />
    </div>
    <section style="height: auto">
      <div style="margin: 2rem 0 5rem 0">
        <p class="font-bold text-4xl" style="margin-bottom: 0.5rem">
          Top visited tours
        </p>
        <p class="font-medium text-base text-gray-400">
          Recommend based on reviews
        </p>
        <div class="flex">
          <MainPreview
            v-for="article in topRating.slice(0, 5)"
            :key="article.article_id"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
              src="https://cdn.dribbble.com/users/1731254/screenshots/11649852/nature_gradients_illustration_tubikarts_4x.png"
              alt="blog"
            />
            <div class="p-6" style="background-color: #f5f8fc">
              <a-space class="tracking-widest" style="display: flex">
                <p class="text-lg title-font font-medium mb-1">
                  {{ article.title_review }}
                </p>
                <div style="display: flex" class="mt-3">
                  <p class="text-sm font-medium text-gray-400">
                    {{ article.rating }}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </a-space>
              <p class="leading-relaxed mb-3 text-gray-600">
                {{ article.information.substring(0, 120) + "..." }}
              </p>
              <div class="flex items-center flex-wrap">
                <router-link :to="`/article/${article.article_id}/`">
                  <a class="text-blue-600"> Read more </a>
                </router-link>
              </div>
            </div>
          </MainPreview>
        </div>
      </div>

      <div style="margin: 2rem 0 5rem 0">
        <p class="font-bold text-4xl" style="margin-bottom: 0.5rem">
          Most visited destinations
        </p>
        <p class="font-medium text-base text-gray-400">
          Take a look where you can enjoy your vacation!
        </p>
        <Slider>
          <div
            v-for="article in topProvince.slice(0, 5)"
            :key="article.province_name"
          >
            <div
              style="
                height: 100vh;
                background-repeat: no-repeat;
                background-position: -20rem -30rem;
                background-image: url('https://www.marriott.com/content/dam/marriott-leisure/destinations/hero/asia/thailand/bangkok/bangkok_hero_destinations.jpg.transform/mcom-leisure-transform-2880/image.jpg');
              "
            >
              <p
                class="text-2xl text-white font-semibold"
                style="padding: 5rem 0 0 0"
              >
                {{
                  article.province_name.substring(
                    0,
                    article.province_name.length - 9
                  )
                }}
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  </div>
</template>

<script>
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import Slider from "@/modules/home/components/Slider";
import axios from "@/plugins/axios";
import MainPreview from "@/components/shared/MainPreview";
import LinkedBar from "@/modules/home/components/LinkedBar";

export default {
  name: "HomePage",
  props: ["user"],
  components: { LinkedBar, MainPreview, Slider, DefaultLayout },
  data() {
    return {
      topRating: [],
      topProvince: []
    };
  },
  created() {
    this.tourProvince();
    this.tourRating();
  },
  computed: {},
  methods: {
    async tourRating() {
      try {
        const response = await axios.get(
          "http://localhost:4000/article/show/review/tour/rating"
        );
        this.topRating = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async tourProvince() {
      try {
        const response = await axios.get(
          "http://localhost:4000/article/show/promote/attraction/province/view"
        );
        this.topProvince = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
.bar-panel {
  background-color: #f5faff;
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6734d468741469.5ba1e302d50aa.jpg");
  background-repeat: no-repeat;
  background-position: 0 -700px;
  background-size: cover;
  height: 30vh;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
