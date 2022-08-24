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
            name:'guanyu',
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
                        name:'xiangqing',
                        path:'detail',
                        component:Detail,
                        //第一种写法，该对象中的所有k，v,都会以props的形式传递给Detail组件
                        /*props:{
                            a:1,b:'hello',
                        },*/
                        //第二种写法,若为真，就会把该路由组件收到的params参数以props的形式传递给Detail组件
                        //无法解决query参数的问题
                        //props:true,
                        //第三种写法,值为函数
                        //props:function(){}
                        /*props($route){
                            return {
                                id:$route.params.id,
                                ids:$route.params.id,
                                title:$route.params.title,
                                titles:$route.params.title,
                                title2:$route.query.title2,
                            }
                        }*/
                        /*解构赋值连续写法*/
                        props({params:{ids,titles,},query:{id,title,title2}}){
                            return {
                                id,
                                ids,
                                title,
                                titles,
                                title2,
                            }
                        }
                    }
                ],
            },],
        },

    ]

});
//暴露路由器
export  default router;