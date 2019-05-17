import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false
Vue.use(VueScrollTo)
Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
