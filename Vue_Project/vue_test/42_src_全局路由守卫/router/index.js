//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
import store from "@/store";
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
            meta:{
                title:'关于'
            }
        },
        {
            name:'zhuye',
            path:'/home',
            meta:{
                title:'主页'
            },
            component:Home,
            children:[{
                name:'xinwen',
                path:'news',
                component:News,
                //路由元信息,不配置一律无权限
                meta:{isAuth:true,
                title:'新闻',
                },
            },
                {
                name:'xinxi',
                path:'message',
                component:Message,
                //路由元信息,不配置一律无权限
                meta:{isAuth:true,title:'信息'},
                children:[
                    {
                        name:'xiangqing',
                        meta:{
                            title:'详情'
                        },
                        path:'detail/:id/:title',
                        component:Detail,
                        props($route){
                            console.log($route.params.id,"-----");
                            return {
                                id:$route.params.id,
                                ids:$route.params.id,
                                title:$route.params.title,
                                titles:$route.params.title,
                                title2:$route.query.title2,
                            }
                        }

                    }
                ],
            },],
        },

    ]

});
//添加全局前置路由守卫--》每次路由切换前调用，+初始化时也会被调用
router.beforeEach(function(to,from,next){
    console.log("全局前置路由守卫启动",this);
    console.log(to,from,next);
    //这里也可以将数据存放在localStorage/sessionStorage中
    //这样不方便如果路由过多，可以在路由标记权限
    //if(to.path==='/home/news'||to.path==='/home/message'){
    if(to.meta.isAuth){//判断是否需要权限
        if(store.state.school=='广德中学'){

            //document.title=to.meta.title||"初始化"; 放到后置守卫里面最好
            //放行
            next();
        }else{
            alert("学校名称不对无权查看")
        }
    }else{
        //document.title=to.meta.title||"初始化";
        next();
    }

});


//添加全局后置路由守卫--》每次路由切换后调用，+初始化时也会被调用
//一般用于修改网页title
router.afterEach(function(to,from){
    console.log("全局后置路由守卫启动",this);
    //关于一闪而过的vue_test名称，需要再index.html中修改成 ‘初始化’
    document.title=to.meta.title||"初始化";
    console.log(to,from);
});

//暴露路由器
export  default router;