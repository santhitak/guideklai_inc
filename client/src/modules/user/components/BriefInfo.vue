<template>
  <div class="flex-none" style="width: 15rem">
    <a
      class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        style="text-transform: capitalize"
      >
        {{ user.firstname + " " + user.lastname }}
      </h5>
      <p class="text-gray-400 font-semibold">
        {{ user.verify_status === "verify" ? "Verified" : "Unverified" }}
      </p>
      <a-divider />
      <div class="flex w-full justify-between">
        <div
          class="flex flex-col text-center text-gray-500 font-semibold"
          v-for="(item, index) in totalPost"
          v-bind:key="index"
        >
          <p>Posts</p>
          <p>{{ item.total }}</p>
        </div>
        <div
          class="flex flex-col text-center text-gray-500 font-semibold"
          v-for="(item, index) in totalComments"
          v-bind:key="index"
        >
          <p>Comments</p>
          <p>{{ item.total }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "BriefInfo",
  props: ["user"],
  data() {
    return {
      totalPost: [],
      totalComments: []
    };
  },
  created() {
    this.getTotalPost();
    this.getTotalComment();
  },
  methods: {
    async getTotalPost() {
      try {
        const response = await axios.get(
          `http://localhost:4000/article/total/${this.user.member_id}`
        );
        this.totalPost = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getTotalComment() {
      try {
        const response = await axios.get(
          `http://localhost:4000/comment/total/${this.user.member_id}`
        );
        this.totalComments = response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped></style>
