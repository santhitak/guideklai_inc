<template>
  <section>
    <div v-for="province in provinces" v-bind:key="province.province_id">
      <p class="text-base text-stone-900">
        {{ province.province_name }}
      </p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Services",
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
        const response = await axios.get("http://localhost:4000/");
        this.provinces = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
