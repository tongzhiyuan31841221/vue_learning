<template>
  <div>
    <h2>当前是sum={{ sum }}</h2>
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
  data() {
    return {
      n: 1,
      sum: 0,
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.n%2==0)return 
      this.sum += this.n;
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 1000);
    },
  },
};
</script>

<style>
</style>