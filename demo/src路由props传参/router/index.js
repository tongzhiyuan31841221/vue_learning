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
                name: 'xijie',
                path: "Detail",
                component: Detail,
                // 你用props传参就算你那边写着params，path也不用站位
                // props: {
                //     joke: "这是个死数据没什么用"
                // }
                // props:true
                props($route){
                    return {
                        joke:$route.params.joke,
                        id:$route.params.id
                    }
                }
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

    ],

})