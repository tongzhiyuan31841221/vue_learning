import VueRouter from "vue-router"
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Messages from "../pages/Messages"
import Detail from "../pages/Detail"
// 创建路由
export default new VueRouter({
    routes: [{
        path: "/home",
        name: "name",
        component: Home,
        children: [{
            path: "news",
            name: "homeNews",
            component: News,
            children: [{
                name: 'newsDetail',
                path: "Detail",
                component: Detail,
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
        children: [{

            path: "news",
            component: News
        },
        {
            name: "aboutMessage",
            path: "messages",
            component: Messages
        },]
    },

    ],

})