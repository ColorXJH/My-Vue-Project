//mixin 混入，混合，将不同组件的相同配置项抽取出来，然后复用
//分别暴露
export  const mixin={
    methods:{
        showName(){
            alert(this.name);
        }
    },
}

export const datas={
    data(){
        return {
            x:100,
            y:200
        }
    }
}
//默认暴露
//export default  mixin
