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
    pubsub.publish("hello",666)
    console.log("我是school组件我发布了消息");

  },
};
</script>

<style>
</style>