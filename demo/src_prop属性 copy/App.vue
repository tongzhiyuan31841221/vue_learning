<template>
  <div>
    <h2>欢迎学习{{ name }}</h2>
    <h2>欢迎学习{{ name }}</h2>
    <hr>
    <School ></School>
    <School ></School>
    
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      name: "zhangsan ",
      age: 123,
    };
  },
  components: {
    School,
  },
  
};
</script>

<style>
</style>