<template>
  <ul>
    <li>c：{{id}}</li>
    <li>d：{{title}}</li>
    <li>c：{{ids}}</li>
    <li>d：{{titles}}</li>
  </ul>
</template>
<script>
    export default {
      name:"Detail",
      props:['id','title','ids','titles'],
      mounted() {
        console.log(this)
      }

    }
</script>
<style>

</style>