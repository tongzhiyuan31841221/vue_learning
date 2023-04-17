// 该文件是本项目的入口文件
// 引入vue
import Vue from 'vue'
// APP
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// console.log(123123123123131)
// 一运行项目就先来这边main.js