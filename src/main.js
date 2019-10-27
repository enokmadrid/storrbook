import Vue from "vue";
import "./plugins/fontawesome";
import "@/scss/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import navigation from "@/components/Navigation.vue";
import adminHeader from "@/components/Header.vue";
import { createProvider } from "./vue-apollo";

library.add(fas);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("navigation", navigation);
Vue.component("adminHeader", adminHeader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
