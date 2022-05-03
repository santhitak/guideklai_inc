<template>
  <section>
    <div style="margin-top: 4rem">
      <p class="font-bold text-3xl" style="margin: 0 0 3rem 6rem">
        Manage Account
      </p>
      <a-tabs
        v-model:activeKey="activeKey"
        tab-position="left"
        :style="{ height: '50vh' }"
        @tabScroll="callback"
      >
        <a-tab-pane key="account" tab="Account">
          <Account :user="user" />
        </a-tab-pane>
        <a-tab-pane key="security" tab="Security">
          <Security :user="user" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </section>
</template>

<script>
import Security from "../components/Security.vue";
import Account from "../components/Account.vue";
import { ref } from "vue";

export default {
  name: "Manage",
  props: ["user"],
  components: { Security, Account },
  data() {
    return {};
  },
  methods: {},
  setup() {
    const mode = ref("top");
    const activeKey = ref("account");

    const callback = (val) => {
      console.log(val);
    };

    return {
      mode,
      callback,
      activeKey
    };
  }
};
</script>

<style scoped></style>
