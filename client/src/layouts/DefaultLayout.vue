<template>
  <div>
    <nav
      class="fixed top-0 right-0 left-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-md"
      style="z-index: 99"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a href="/" class="flex items-center">
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-blue-600"
          >Guide Klai</span
          >
        </a>
        <div class="flex md:order-2">
          <div v-if="!user">
            <router-link
              to="/auth/login"
              class="text-gray-900 hover:text-gray border border-gray-800 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Sign In
            </router-link>
            <router-link
              to="/auth/register"
              class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Sign Up
            </router-link>
          </div>
          <div v-else>
            <a-dropdown :trigger="['click']">
              <button
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 mr-2"
              >
                <a class="ant-dropdown-link" @click.prevent>
                  <a-avatar>{{ user.username.substring(0, 1) }}</a-avatar>
                  <p class="text-gray-600 font-semibold inline mx-4">
                    {{ user.username }}
                  </p>
                </a>
              </button>
              <template #overlay>
                <a-menu style="border-radius: 10px">
                  <a-menu-item key="0">
                    <a :href="`/${user.username}/profile/`">Profile</a>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a :href="`/${user.username}/setting/`"
                    >Manage Account</a
                    >
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="3" @click="logout">Sign out</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
        <div class="justify-between items-center flex md:w-auto md:order-1">
          <ul
            class="flex flex-col m-0 p-0 md:flex-row md:space-x-8 md:text-sm md:font-medium mb-0"
          >
            <li>
              <router-link to="/">
                <a
                  href="/"
                  class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                  aria-current="page"
                >Home
                </a></router-link
              >
            </li>
            <li>
              <router-link to="/article" :user="user">
                <a
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Article
                </a></router-link
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >Services</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <slot></slot>
    <footer
      class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800"
    >
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-blue-600"
          >
            Guide Klai
          </span>
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 text-blue-600">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline text-blue-600">Contact</a>
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >
        © 2022
        <a href="https://flowbite.com" class="hover:underline text-blue-600"
        >Guide Klai™</a
        >
        All Rights Reserved.
      </span>
    </footer>
  </div>
</template>

<script>

export default {
  name: "DefaultLayout",
  props: ["user"],
  components: {},
  data() {
    return {};
  },
  methods: {
    async logout() {
      try {
        localStorage.clear();
        window.location.replace("/");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
