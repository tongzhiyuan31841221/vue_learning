<template>
  <div>
    <h2>当前是sum={{ $store.state.sum }}</h2>
    <h2>当前是sum*10={{ $store.state.sum*10 }}</h2>
    <h2>当前是sum*10={{ $store.getters.big }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">n为奇数才加</button>
    <button @click="incrementWait">等一会才加</button>
  
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {

    increment() {
      this.$store.commit("Increment", this.n);
    },
    decrement() {
      this.$store.commit("Decrement", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.n);
    },
  },
};
</script>

<style>
</style>