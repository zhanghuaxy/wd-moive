import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueAxios from "vue-axios";
import axios from "axios";
import infiniteScroll from "vue-infinite-scroll";
//引入css，js,image直接引入
import "./assets/css/unit.css";
import "./assets/font/font-awesome-4.7.0/css/font-awesome.min.css";
import loading from "./plugins/loading";

Vue.use(loading);
//插件必须在new 之前
Vue.use(infiniteScroll);

Vue.use(vueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
