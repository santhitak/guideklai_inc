<template>
  <section>
    <h1 style="font-size: 48px; font-weight: bolder">
      Hi, this is a review page
    </h1>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Review",
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
