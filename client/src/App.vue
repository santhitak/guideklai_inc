<template>
  <div id="app">
    <DefaultLayout :user="user" >
      <router-view  :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />
    </DefaultLayout>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: "App",
  components: { DefaultLayout },
  data() {
    return {
      user: null
    };
  },
  created() {
    this.onAuthChange();
  },
  computed: {
    layout() {
      return this.$route.meta.layout
        ? `layout-${this.$route.meta.layout}`
        : null;
    }
  },
  methods: {
    onAuthChange() {
      const token = localStorage.getItem("token");
      if (token) {
        this.getUser();
      }
    },
    getUser() {
      const token = localStorage.getItem("token");
      axios
        .get("http://localhost:4000/auth/member", {
          headers: { Authorization: "Bearer " + token }
        })
        .then((res) => {
          this.user = res.data;
        });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}

section {
  width: 100vw;
  height: 100vh;
  padding: 3rem 10rem;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #adadad;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb:hover {
  background: #808080;
}
</style>
