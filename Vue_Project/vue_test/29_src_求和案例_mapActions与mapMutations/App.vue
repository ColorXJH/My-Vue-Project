<template>
  <div>
    <Count/>
  </div>
</template>
<script>
import Count from "@/components/Count";
  export default {
    name:'App',
    components:{Count},
    method:{

    },
    mounted() {
      console.log('app',this);
    }

  }
</script>
<style lang="css" scoped>

</style>
