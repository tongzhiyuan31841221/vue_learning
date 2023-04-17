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
        component: Home,
        children: [{

            path: "news",
            component: News,
            children: [{
                name: "NewsDetail",
                path: "Detail",
                component: Detail
            }]
        },
        {
            path: "messages",
            component: Messages
        },]
    },
    {
        path: "/about",
        component: About,
        children: [{

            path: "news",
            component: News
        },
        {
            path: "messages",
            component: Messages
        },]
    },
        // 这样写会把上一级给盖了
        // {
        //     path:"/home/news",
        //     component:News
        // },
        // {
        //     path:"/home/messages",
        //     component:Messages
        // },
        // {
        //     path:"/about/news",
        //     component:News
        // },
        // {
        //     path:"/about/messages",
        //     component:Messages
        // }

    ]
})