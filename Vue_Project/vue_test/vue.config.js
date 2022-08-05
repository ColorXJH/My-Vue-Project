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
  lintOnSave:false
})


//common.js的暴露
//该文件是最后会输送给webpack, webpack基于nodejs，nodejs中所采用的模块化是common js
/*
module.exports={

}
*/
