import "./scss/base.scss";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import "./scss/tools.scss";


Vue.config.productionTip = false;

Vue.use(VueAxios,axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
