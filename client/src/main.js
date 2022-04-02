import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import DefaultLayout from "./layouts/DefaultLayout.vue";

const app = createApp(App);

app.use(router)
app.component('layout-nav', DefaultLayout)
app.mount('#app')
