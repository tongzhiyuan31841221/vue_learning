//引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from "vuex"
//引入App
import App from './App.vue'
//关闭Vue的生产提示
// import store from "./store/index"
// 引入vue-router
import vueRouter from "vue-router"
// 引入路由器
import router from "./router/index.js"
Vue.config.productionTip = false
Vue.use(vueRouter)

//创建vm
new Vue({
	el:'#App',
	router,
	render: h => h(App),
	beforeCreate(){
		Vue.prototype.$bus=this
		
	}
})
