<template>
  <div>
    <h2>当前是sum={{ sum }}</h2>

    <h2>当前是sum*10={{ big }}</h2>
    <h2>我在{{ school }}，学习{{ subject }}</h2>

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
import { mapState, mapGetters } from "vuex";
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
  computed: {
    //  $store.state.sum
    //  $store.getters.big
    //  $store.state.school
    //  $store.state.subject
    //  你会发现这部分有点烦，vuex提供了批量生成这些计算属性的方法
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // mapState返回的是个对象，要用展开运算符
    // {he（计算属性名）:"sum"（state的需要的属性名）
    // 数组写法当计算属性名和state所需要的属性名一直可以直接简写为一个是数组
    // ...mapState({he:"sum",xuexiao:"school",xueke:"subject"}),
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters({ big: "big" }),
  },
};
</script>

<style>
</style>