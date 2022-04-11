<template>
  <section>
    <div v-for="item in province" v-bind:key="item.province_id">
      <p>{{ item.province_name }}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Services",
  data() {
    return {
      province: [],
    };
  },

  created() {
    this.getProvince();
  },

  methods: {
    async getProvince() {
      try {
        const response = await axios.get("http://localhost:4000/");
        this.province = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
