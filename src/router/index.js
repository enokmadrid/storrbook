import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: "/designs"
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("../views/Categories.vue")
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("../views/Protected.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
