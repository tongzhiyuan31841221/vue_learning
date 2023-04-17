<template>
  <ul>
    <!-- <li v-for="index in 3" :key="index">{{$route.query.joke}}</li> -->
    <li>{{$route.params.joke}}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  methods:{
   
  },
  mounted(){
    console.log(this.$route);
   }
};
</script>

<style>
</style>