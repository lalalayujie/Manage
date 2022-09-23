import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Antd from 'ant-design-vue';


Vue.use(Antd);
Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.prototype.$http = axios;
// axios.defaults.baseURL = 'http://localhost:8081'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
