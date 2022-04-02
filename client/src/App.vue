<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {  },
  computed: {
    layout() {
      return this.$route.meta.layout
          ? `layout-${this.$route.meta.layout}`
          : null;
    },
  },
}
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
