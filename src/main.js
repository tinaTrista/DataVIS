// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import store from "./store"

Vue.config.productionTip = false
window.$echarts = echarts;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 这个方法用于获取目标元素左上角相对于窗体的坐标
// 由于offsetLeft和offsetTop只能用于获取元素相对于父元素的位置，
// 所以需要循环获取父元素的坐标直至根元素。
Vue.prototype.getElementPosition = function(el) {
    let _x = 0, _y = 0;
    do {
         _x += el.offsetLeft;
         _y += el.offsetTop;
     } while (el = el.offsetParent);
     return { x: _x, y: _y };
 }
