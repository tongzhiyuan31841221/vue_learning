<template>
  <div class="container">
    <h2>{{ studentName }}</h2>
    <h2>{{ studentName }}</h2>
    <button @click="getMsg">点我将学生姓名传给学校</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      studentName: "yyyy同学",
    };
  },
  methods: {
    sendStudentName() {
      console.log("事件已经出发");
      this.$bus.$emit("hello", this.studentName);
    },
    getMsg() {
      pubsub.subscribe("hello", function (msg, data) {
        console.log("收到消息", msg, data);
      });
    },
  },
};
</script>

<style>
</style>