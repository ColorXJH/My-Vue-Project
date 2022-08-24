//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入组件
import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";
//创建一个路由器
const router=new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[{
                path:'news',
                component:News,
            },{
                path:'message',
                component:Message,
                children:[
                    {
                        path:'detail',
                        component:Detail,
                    }
                ],
            },],
        },

    ]

});
//暴露路由器
export  default router;