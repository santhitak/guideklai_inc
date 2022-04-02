import { createApp } from 'vue';
import routes from "./routes";
import App from './App.vue'
import DefaultLayout from "./layouts/DefaultLayout.vue";
import { registerModules } from "@/register-modules";
import modules from "@/modules";

registerModules(modules)

const app = createApp(App);

app.use(routes)
app.component('layout-nav', DefaultLayout)
app.mount('#app')
