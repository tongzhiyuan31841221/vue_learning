import Vue from "vue"
import App from "./App.vue"
Vue.config.productionTip=false
// 两种全局事件的方式
// 首先原理都要找一个vm，VC都能访问的傀儡，首先满足这个点的有两类原生的静态对象，那就是还有vm，VC
// 第二点要有$on $off $emit 方法，所以原生的都无了
const x=Vue.extend({})
const vc=new x()//这样完全不行的，虽然这就是VC
Vue.prototype.x={a:1,b:2}
// vc.prototype.x=100你这样子直接夹不上去
// 所以只能用vm
// Vue.prototype.$bus=vm或者vc
// Vue.prototype.$bus=new Vue()
const vm=new Vue({
    el:"#App",
    render:(h)=>{return h(App)},
    beforeMount(){
        // 建立全局事件总线
        Vue.prototype.$bus=this
        console.log(this.$bus.$on)
    }
})
