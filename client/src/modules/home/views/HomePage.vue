<template>
  <div>
    <Container>
      <div
        class="linkToPage"
        style="display: flex; justify-content: center; gap: 15px"
      >
        <LinkBtn>Restaurants</LinkBtn>
        <LinkBtn>Tour</LinkBtn>
        <LinkBtn>Guide</LinkBtn>
        <LinkBtn>Rest</LinkBtn>
        <LinkBtn>Attraction</LinkBtn>
        <LinkBtn>Store</LinkBtn>
      </div>
    </Container>

    <Container>
      <div v-for="article in articles" :key="article.article_id">
        <h5>{{ article.article_id + ". " + article.title }}</h5>
      </div>
    </Container>

    <Slider />
    <MostViewed />
    <MostRating />
  </div>
</template>

<script>
import MostViewed from "@/modules/home/components/MostViewed";
import MostRating from "@/modules/home/components/MostRating";
import LinkBtn from "@/modules/home/components/LinkBtn";
import Slider from "@/modules/home/components/Slider";
import axios from "@/plugins/axios";
import Container from "@/components/containers/Container";

export default {
  name: "HomePage",
  components: { Container, MostRating, MostViewed, LinkBtn, Slider },
  data() {
    return {
      email: null,
      password: null,
      articles: []
    };
  },
  created() {
    this.articleData();
  },
  methods: {
    async articleData() {
      try {
        const response = await axios.get("http://localhost:4000/article");
        this.articles = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
