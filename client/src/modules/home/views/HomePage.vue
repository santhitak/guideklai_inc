
<template>
<div>
  <!-- <div v-for="article in articles" :key="article.article_id"> -->
    <div class="">
      <section style="height: auto">

      <div class="linkToPage" style="
        display: flex;
        justify-content:center;
        gap: 15px;
        
      " >

    <LinkBtn>Restaurants</LinkBtn>
    <LinkBtn>Tour</LinkBtn>
    <LinkBtn>Guide</LinkBtn>
    <LinkBtn>Rest</LinkBtn>
    <LinkBtn>Attraction</LinkBtn>
    <LinkBtn>Store</LinkBtn>
      </div>
      </section>
    <MostViewed />
    <MostRating />
    <Slider />
    
    <!-- <p></p> -->
    <!-- {{articles}} -->
  </div>
</div>
</template>

<script>
import MostViewed from "@/modules/home/components/MostViewed";
import MostRating from "@/modules/home/components/MostRating";
import LinkBtn from "@/modules/home/components/LinkBtn";
import Slider from "@/modules/home/components/Slider";
// import axios from "axios";
export default {
  name: "HomePage",
  components: { MostRating, MostViewed, LinkBtn, Slider },
  data(){
    return{
      email: null,
      password: null,
      articles:[]
    }
  },
  // created() {
  //   this.articleData();
  // }, 
  // methods: {
  //   async articleData() {
  //     try {
  //       const response = await axios.get("http://localhost:4000/article");
  //       this.articles = response.data;
  //       // console.log("🚀 ~ file: Register.vue ~ line 275 ~ memberData ~ this.memberDatas", this.memberDatas)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // },
};
</script>

<style scoped>

</style>