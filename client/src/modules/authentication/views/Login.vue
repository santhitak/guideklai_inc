<template>
  <section class="bg-gray-50">
    <div
      style="
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
      "
    >
      <div
        class="max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-8"
        style="min-width: 25vw"
      >
        <div class="p-8 space-y-6">
          <div class="divide-y">
            <div class="pb-6">
              <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                Sign in<br />
                <span class="text-sm"
                >For security, please sign in to access information</span
                >
              </h5>
            </div>
            <div class="pt-6 flex flex-col justify-center">
              <div class="mb-6">
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  v-model="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div class="mb-6">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your password"
                  required=""
                />
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="remember"
                    class="font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <button
                @click="login"
                class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign In
              </button>
            </div>
          </div>
          <div class="text-sm my-6">
            Don't have an account?
            <router-link to="/auth/register">
              <p class="text-blue-600" style="display: inline">Register</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  name: "Login.vue",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      let data = {
        username: this.username,
        password: this.password
      };

      axios
        .post("http://localhost:4000/auth/login/", data)
        .then((res) => {
          if (res.data) {
            localStorage.setItem("token", res.data.token);
            this.$emit("auth-change");
            window.location.replace("/");
          }
        })
        .catch((error) => {
          this.error = error.response.data;
          console.log(error);
        });
    }
  }
};
</script>
