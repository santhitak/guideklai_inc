<template>
  <section>
    <div v-for="blog in blogs" v-bind:key="blog.id">
     <p>{{blog.id + ". " + blog.title}}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Services",
  data() {
    return {
      blogs: [],
    };
  },

  created() {
    this.getBlogs();
  },

  methods: {
    async getBlogs() {
      try {
        const response = await axios.get("http://localhost:4000/");
        this.blogs = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
