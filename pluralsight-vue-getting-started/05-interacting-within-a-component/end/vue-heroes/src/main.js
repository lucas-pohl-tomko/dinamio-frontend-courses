import Vue from 'vue';
import App from '@/app';

Vue.config.productionTip = false;

Vue.filter('test', bla => {return bla + ' (GLOBAL FILTER!!)'});

new Vue({
  render: h => h(App),
}).$mount('#app');
