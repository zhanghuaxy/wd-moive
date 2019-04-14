import Vue from "vue";
import Router from "vue-router";
import Citys from "./views/citys.vue";
import Cinema from "./views/cinema.vue";
import Detail from "./views/detail.vue";
Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "citys",
      component: Citys
    },
    {
      path: "/cinema",
      name: "cinema",
      component: Cinema,
      //路由元数据
      meta: {
        transition: "cinema"
      }
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail
    }
  ]
});
export default router;
