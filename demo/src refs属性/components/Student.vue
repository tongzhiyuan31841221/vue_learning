<template>
  <div>
    <h2 id="title" ref="title">学生姓名{{ name }}</h2>
    <h2>学生年龄{{ age }}</h2>
    <button @click="showDOM">点击获取DOM</button>
  </div>
</template>

<script>
    export default {
      name: "Student",
      data() {
        return {
          name: "zhangsan",
          age: 123,
        };
      },
      methods:{
        showDOM(){
          // console.log(document.querySelector("#title"));
          // 我们不用自己获取DOM元素,ref相当于vue中的id，在组件标签上也可以用ref，可以直接拿到这个组件实例对象  
          console.log(this.$refs.title)
        }
      }
    };
</script>

<style>
</style>