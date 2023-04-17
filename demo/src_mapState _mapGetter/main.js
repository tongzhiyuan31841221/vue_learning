//引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from "vuex"
//引入App
import App from './App.vue'
//关闭Vue的生产提示
import store from "./store/index"
Vue.config.productionTip = false


//创建vm
const vm=new Vue({
	el:'#App',
	store,
	render: h => h(App),
	beforeCreate(){
		Vue.prototype.$bus=this
		
	}
})
// console.log(vm)