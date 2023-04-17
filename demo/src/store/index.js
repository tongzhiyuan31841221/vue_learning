import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex)
import count from "./count"
import person from "./person"
const store = new vuex.Store({
    modules:{
        count,
        person,
    }
})