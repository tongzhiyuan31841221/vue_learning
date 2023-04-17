<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
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