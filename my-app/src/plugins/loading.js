import load from "../components/loading.vue";
import jquery from "jquery";
export default {
  install(Vue) {
    Vue.pop = function() {
      alert("hello world");
    };
    let Loader = Vue.extend(load); //extend扩展Vue子类
    let loader = new Loader({
      el: document.createElement("div")
    });
    document.body.appendChild(loader.$el);
    Vue.show = function() {
      jquery(loader.$el).show();
    };
    Vue.hide = function() {
      jquery(loader.$el).hide();
    };
  }
};
