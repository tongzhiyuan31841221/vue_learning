<template>
  <div class="box">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>
<script>
    export default{
        name:"School",
        data(){
            return {
                name:"学校名称",
                address:"学校地址"
            }
        } 
    }
  
  
</script>
<style>
.box {
  background: pink;
}
</style>
