import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible.js';


import VuePreview from 'vue2-preview'; // 缩略图插件
Vue.use(VuePreview)
import 'swiper/dist/css/swiper.css';
Vue.config.productionTip = false

import "@/assets/font/font.scss";

import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
	// ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
	ak: 'rGhPoeI5SWfwdu2XoUx6RtGRKIomBk9a'
});




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
