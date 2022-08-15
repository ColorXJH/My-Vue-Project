<template>
  <div id="root">
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>
<script>

import  axios from 'axios';
export default {
  name: 'App',
  methods: {
    getStudent(){
      //违背了同源策略：协议名，主机名，端口号 三个必须一致，请求发了，服务器收了，服务器也返回了，但是你拿不到，在你这个网页被拦截了
      //如何解决：
        //1:cors,这种不需要前端人员书写，后端在代码中携带特殊的响应头
          //1:@CrossOrigin 注解，在类或者方法上添加上该注解，就可解决。注解上也可加条件来限制请求网页。
          //2:重写WebMvcConfigurer接口的addCorsMappings方法:详见redefine-springboot-15
          //3:定义一个过滤器
        //2:jsonp: 前后端都得写点代码配合，只能解决get请求
          //不管是我们的script标签的src还是img标签的src，或者说link标签的href他们没有被同源策略所限制
        //3:配置一个代理服务器
          //8080前端-》8080服务器-》5000服务器，数据请求找到8080代理服务器，代理服务器和5000服务器之前不存在跨域问题
          //因为都是服务器间通信（服务器间通信不用ajax,比如nodejs服务器中写newXMLHttpRequest()），8080网页客户端和5000之间才存在跨域问题
          //如何开启一个代理服务器？:1:nginx  2:vue-cli
                                        //vue-cli会为我们创建一个地阿里服务器，端口和我们的源端口一样，在vue.config.js中配置
                                        //1:代理服务器不是把所有的请求都转发8081，当你请求的资源8080本身就有
                                            //比如我们请求localhost:8080/test.txt,他就会在public文件夹下找（该文件夹相当于8080服务器的根路径）
                                        //2:vue.config.js中配置的方式一，不能配置多个代理,参考方式二
      axios.get("http://localhost:8080/api/jsonp").then(
      //axios.get("http://localhost:8080/api/emp/1").then(
      //axios.get("http://localhost:8080/test.txt").then(
      //axios.get("http://localhost:8081/emp/1").then(
          response=>{
            console.log("请求成功了",response.data)
          },
          error=>{
            console.log("请求失败了",error.message)
          }
      )
    },
  },
  components: {

  },



}

</script>

<style>

</style>
