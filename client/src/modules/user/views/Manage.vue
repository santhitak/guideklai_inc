<template>
  <section>
    <div class="mb-4 border-b border-gray-200">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="true"
          >
            Profile
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Settings
          </button>
        </li>
      </ul>
    </div>
    <div id="myTabContent">
      <div
        class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <Account />
      </div>
      <div
        class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <Security />
      </div>
    </div>
  </section>
</template>

<script>
import Security from "../components/Security.vue";
import Account from "../components/Account.vue";


export default {
  name: "Manage",
  components: { Security, Account },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
