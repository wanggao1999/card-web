import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import Back from '@/components/back/index'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/main.scss'
import '@/plugin/amap'
Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.component('Back',Back)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
