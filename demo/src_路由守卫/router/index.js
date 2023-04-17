import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Messages from "../pages/Messages"
import Detail from "../pages/Detail"
// 创建路由
const router = new VueRouter({
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home,
            meta: {
                school: "yifengtingyu",
                title: "home"
            },
            children: [{
                path: "news",
                name: "homeNews",
                component: News,
                meta: {
                    title: "homeNews",
                },
                children: [{
                    name: 'newsDetail',
                    path: "Detail",
                    component: Detail,
                    meta: {
                        title: "newsDetail",
                    },

                    props($route) {

                        return {
                            joke: $route.params.joke,
                        }
                    }
                }]
            },
            {
                name: "homeMessage",
                path: "messages",
                component: Messages,
                meta: {
                    title: "homeMessage",
                },
                props($router) {
                    return {
                        message: $router.params.message
                    }

                }
            },]
        },
        {
            name: "about",
            path: "/about",
            component: About,
            props: true,
            meta: {
                title: "about",
            },
            children: [{
                path: "news",
                name: "aboutNews",
                meta: {
                    title: "aboutNews",
                },
                component: News
            },
            {
                name: "aboutMessage",
                path: "messages",
                meta: {
                    title: "aboutMessage",
                    isAuth:true
                },
                beforeEnter(to,from,next){
                    // 只限制这一种路由规则
                    // 独享路由守卫，是在对应的路由规则哪里定义
                    if(to.meta.isAuth){
                        alert("需要权限才可以")
                    }else{
                        next()
                    }
                    console.log("独享路由守卫开始工作",to,from,next)
                },
                component: Messages
            },]
        },

    ],

})
// 路由守卫一定要在路由配置这边写
router.beforeEach((to, from, next) => {
    // console.log("全局前置守卫工作了", to, from, next)
    // 别的路由跳转我不管，但是你如果是这种那一定要验证
    if (to.name == "homeNews" && from.name == "home") {
        if (from.meta.school == window.localStorage.getItem("school")) {
            console.log("school正确")
            next()
        }else{
            console.log("school错误")
        }
        
    } else {
        next()
    }

})
router.afterEach((to, from, next) => {
    // console.log("全局后置守卫工作了", to, from, next)
    // console.log(to.meta.title)
    // 通过控制台我们其实可以看到后置没有next
    document.title = to.meta.title
})
export default router
