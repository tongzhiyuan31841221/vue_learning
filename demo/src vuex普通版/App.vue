<template>
  <div class="container">
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
// 主要注意的是slot不需要绑定，毕竟本来就是一个字符串，不是字符串采用v-bind
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Count,Person
  },
};
</script>

<style >
.container {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-around;
}
button {
  margin-right: 8px;
}
</style>
