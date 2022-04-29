<template>
  <div>
    <nav
      class="fixed top-0 right-0 left-0 bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow-md"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <a href="/" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap"
          >Guide Klai</span
          >
        </a>
        <div class="flex md:order-2">
          <div v-if="!user">
            <router-link to="/auth/login">
              <button
                type="button"
                class="text-gray-900 hover:text-gray border border-gray-800 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Sign In
              </button>
            </router-link>
            <router-link to="/auth/register">
              <button
                type="button"
                class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
            </router-link>
          </div>
          <div v-else>
            <button
              type="button"
              class="text-gray-900 hover:text-gray border border-gray-800 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              {{ user.username }}
            </button>
          </div>
        </div>
        <div
          class="justify-between items-center w-full h-full flex md:w-auto md:order-1"
        >
          <ul
            class="flex flex-col m-0 p-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
          >
            <li>
              <a
                href="/"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
              >Home
              </a>
            </li>
            <li>
              <a
                href="/article"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >Article</a
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
    <div class="pt-16">
      <slot></slot>
    </div>
    <footer
      class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800"
    >
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-2xl font-semibold whitespace-nowrap">
            Guide Klai
          </span>
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
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
        <a href="https://flowbite.com" class="hover:underline">Guide Klai™</a>
        All Rights Reserved.
      </span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  props: ["user"],
  data() {
    return {};
  },
  methods: {}
};
</script>
