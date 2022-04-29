<template>
  <section>
    TOP 5 View in Promote
    <Slider>
      <div
        v-for="article in promoteAllShow.slice(0, 5)"
        :key="article.article_id"
      >
        <h5>{{ article.view }} {{ article.title_promote }}</h5>
      </div>
    </Slider>
  </section>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "MostViewed",
  data() {
    return {
      topArticles: []
    };
  },
  computed: {
    promoteAllShow: function() {
      return this.topArticles.filter((u) => {
        return u.type_article === "Promote";
      });
    }
  },
  methods: {
    async articleTopFive() {
      try {
        const response = await axios.get(
          "http://localhost:4000/article/show/all"
        );
        this.topArticles = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped></style>
