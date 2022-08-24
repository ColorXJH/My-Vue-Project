<template>
  <ul>
    <li>c：{{id}}</li>
    <li>d：{{title}}</li>
  </ul>
</template>
<script>
    export default {
      name:"Detail",
      props:['id','title'],
      mounted() {
        console.log(this)
      }

    }
</script>
<style>

</style>