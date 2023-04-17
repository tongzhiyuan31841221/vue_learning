<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
import School from "./components/Schoool.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },

};
</script>

<style>
</style>