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
      TOP 5 View in review
      <Slider>
        <div
          v-for="article in reviewAllShow.slice(0, 5)"
          :key="article.article_id"
        >
          <h5>{{ article.view }} {{ article.title_review }}</h5>
        </div>
      </Slider>
    </Container>

    <Container>
      TOP 5 reviewTour
      <Slider>
        <div
          v-for="article in reviewTour.slice(0, 5)"
          :key="article.article_id"
        >
          <h5>{{ article.view }} {{ article.title_review }}</h5>
        </div>
      </Slider>
    </Container>

    <Container>
      TOP 5 View in Promote
      <Slider>
        <div
          v-for="article in promoteAllShow.slice(0, 5)"
          :key="article.article_id"
        >
          <h5>{{ article.view }} {{ article.title_promote }}</h5>
        </div>
      </Slider>
    </Container>

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
      articles: [],
      articleTopFives: [],
      articleTopFiveReviews: [],
    };
  },
  created() {
    this.articleData();
    this.articleTopFive();
    this.articleTopFiveReview();
  },
  computed: {
    promoteAllShow: function () {
      return this.articleTopFives.filter((u) => {
        return u.type_article == "Promote";
      });
    },
    reviewAllShow: function () {
      return this.articleTopFives.filter((u) => {
        return u.type_article == "Review";
      });
    },
    
    reviewRestaurant: function () {
      return this.articleTopFiveReviews.filter((u) => {
        return u.category == "review_restaurant";
      });
    },
     reviewTour: function () {
      return this.articleTopFiveReviews.filter((u) => {
        return u.category == "review_tour";
      });
    },
    reviewGuide: function () {
      return this.articleTopFiveReviews.filter((u) => {
        return u.category == "review_guide";
      });
    },
    reviewRest: function () {
      return this.articleTopFiveReviews.filter((u) => {
        return u.category == "review_rest";
      });
    },
    reviewAttraction: function () {
      return this.articleTopFiveReviews.filter((u) => {
        return u.category == "review_attraction";
      });
    },
     reviewStore: function () {
      return this.articleTopFiveReviews.filter((u) => {
        return u.category == "review_store";
      });
    },
    
  },
  methods: {
    async articleData() {
      try {
        const response = await axios.get("http://localhost:4000/article");
        this.articles = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async articleTopFive() {
      try {
        const response = await axios.get(
          "http://localhost:4000/article/show/topFiveViewAll"
        );
        this.articleTopFives = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async articleTopFiveReview() {
      try {
        const response = await axios.get(
          "http://localhost:4000/article/show/topFiveViewAllReview"
        );
        this.articleTopFiveReviews = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
