<template>
  <div class="container">
    <h2>{{ schoolName }}</h2>
    <h2>{{ schoolName }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
export default {
  name: "School",
  data() {
    return {
      schoolName: "xxxxx学校",
    };
  },
  methods: {
    show() {
      console.log(this.$bus);
      return this.x;
    },
  },
  mounted() {
    //订阅消息
    console.log("发布消息")
    pubsub.publish('hello',666)
    console.log("school组件已经发布消息");
  },
};
</script>

<style>
</style>