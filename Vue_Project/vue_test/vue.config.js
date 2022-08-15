const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
      //入口
      //entry:"src/index/peiqi.js",
      entry:"src/main.js",
    }
  },
  //关闭语法检查
  lintOnSave:false,
  //开启代理服务器 方式一
  /*devServer:{
    proxy:'http://localhost:8081',
  },*/
  //开启代理服务器 方式二
  devServer:{
    proxy:{
      //请求前缀，控制是否走代理
      '/api':{
        target:'http://localhost:8081/emp',
        //路径重写，去掉请求前缀
        pathRewrite:{'^/api':''},
        //ws,changeOrigin默认都是true
        ws:true,//用于支持websocket
        //用于控制请求头中的host值
        changeOrigin:false,//true false代表原始路径来自哪里,false代表真是代理地址，true表示源地址（说谎）
      },
      '/foo':{
        target: 'http://localhost:8081/jsonp',
        pathRewrite:{'^/foo':''},
      },
    },
  },
})


//common.js的暴露
//该文件是最后会输送给webpack, webpack基于nodejs，nodejs中所采用的模块化是common js
/*
module.exports={

}
*/
