<template>
  <section>
    <h1 style="font-size: 48px; font-weight: bolder">
      Hi, this is a review page
    </h1>
    <RedBtn>HELLO RED</RedBtn>
  </section>
</template>

<script>
import axios from "axios";
import RedBtn from "@/components/shared/RedBtn";

export default {
  name: "Review",
  components: { RedBtn },
  data() {
    return {
      provinces: [],
    };
  },

  created() {
    this.getProvince();
  },

  methods: {
    async getProvince() {
      try {
        const response = await axios.get("http://localhost:4000/review");
        this.provinces = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped></style>
