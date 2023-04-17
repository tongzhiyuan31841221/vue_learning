<template>
  <div >
    <Count></Count>
    <hr><hr>
    <Person></Person>
  </div>
</template>

<script>
import Person from "./components/Person.vue"
import Count from "./components/Count.vue"
export default {
  name: "App",
  components: {
    Person,
    Count,
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
