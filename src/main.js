// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入懒加载
import VueLazyload from 'vue-lazyload'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入下滑加载更多
import { InfiniteScroll } from 'mint-ui'



Vue.use(VueLazyload)
Vue.use(VueAwesomeSwiper)
Vue.use(InfiniteScroll)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
