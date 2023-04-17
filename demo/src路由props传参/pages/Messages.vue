<template>
  <ul>
   <li v-for="(item,index) in messages" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
name:"Messages",
data(){
    return{
        messages:["messages001","messages002","messages003",]
    }
}
}
</script>

<style>

</style>