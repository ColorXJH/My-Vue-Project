const obj={
    install(Vue,x,y,z){
        console.log("@@测试插件",Vue);
        console.log(x);
        console.log(y);
        console.log(z);
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4);
        });
        //定义全局指令
        Vue.directive('fbind',{
            bind(ele,bind){
                ele.value=bind.value;
            },
            inserted(ele,bind){
                ele.focus();
            },
            updated(ele,bind){
                ele.value=bind.value;
            },

        });
        //定义混入
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:200,
                }
            }
        });
        //给vue原型上添加方法（vm 和vc 就都能用了）
        Vue.prototype.hello=()=>{
            alert("你好啊");
        };
    }
}

export default obj;
