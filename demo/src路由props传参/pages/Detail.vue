<template>
  <ul>
    <!-- <li v-for="index in 3" :key="index">{{$route.query.joke}}</li> -->
    <li><span>{{id}}</span>{{joke}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:["joke","id"],
  
  mounted(){
    console.log(this.joke);
   }
};
</script>

<style>
</style>