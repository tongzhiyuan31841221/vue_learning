import Vue from "vue"
import Vuex from "vuex"
// 使用vuex
Vue.use(Vuex)
// 该文件用于创建store
// 用于响应组建的动作
// 业务逻辑的封装放在这里
const actions = {
    
    incrementOdd(context, value) {
        if (value % 2 == 0) return
        context.commit("IncrementOdd", value)
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit("IncrementWait", value)
        }, 1000);
    },
    addperson(context,value){
        context.commit("AddPerson",value)
    }
}
// 用于操作数据（state）
const mutations = {
    Increment(state, value) {
        console.log(state,value)
        state.sum += value
    },
    Decrement(state, value) {
        state.sum -= value
    },
    IncrementOdd(state, value) {
        if (value % 2 == 0) return
        state.sum += value
    },
    IncrementWait(state, value) {
        state.sum += value
    },
    AddPerson(state,value){
        console.log("添加成功")
        state.personList.push(value)
    }
}
// 数据
const state = {
    sum: 0,
    personList: [{
        id: "001", name: "zhangsan1", sex: "男"
    },  {
        id: "002", name: "zhangsan2", sex: "男"
    }, {
        id: "003", name: "zhangsan3", sex: "男"
    }, {
        id: "004", name: "zhangsan4", sex: "男"
    }]
}
const getters={
    big(state){
        return state.sum*=3
       
    }
}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
