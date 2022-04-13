import { setupRouterGuard } from "@router/guard";
import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter, router } from "./router";
import { VueClipboard } from '@soerenmartius/vue3-clipboard'
const app = createApp(App);

// 装载路由
setupRouter(app);

// 装载路由拦截
setupRouterGuard(router);
app.use(VueClipboard)
app.mount("#app");
