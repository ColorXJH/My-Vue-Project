<template>
  <ul>
    <li>消息编号：{{$route.params.id}}</li>
    <li>消息标题：{{$route.params.title}}</li>
    <li>c：{{id}}</li>
    <li>d：{{title}}</li>
    <li>e：{{ids}}</li>
    <li>f：{{titles}}</li>
    <li>f：{{title2}}</li>
  </ul>
</template>
<script>
    export default {
      name:"Detail",
      props:['id','title','ids','titles','title2'],
    }
</script>
<style>

</style>