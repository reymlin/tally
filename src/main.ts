import { App } from "./App";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { Router } from "./router/index";
import { setDomFontSize } from "./utils/resize";
import "vant/lib/index.css";

setDomFontSize();
const pinia = createPinia();
createApp(App).use(Router).use(pinia).mount("#app");
