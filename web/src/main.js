import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/login", component: LoginComponent },
  { path: "/home", component: HomeComponent },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
