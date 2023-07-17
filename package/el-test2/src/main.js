import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "./styles/reset.css";
import router from "./router";
// import 'element-ui/lib/theme-chalk/index.css';
import "./styles/element-variables.scss";


Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
