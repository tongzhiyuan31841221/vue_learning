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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">n为奇数才加</button>
    <button @click="incrementWait(n)">等一会才加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // mapMutations只能帮你生成如下形式的函数，因为mapMutation的对象中其实没有参数
    // 所以他会默认一个value，但是事件调用会自己串一个事件对象，这样就不对了，所以要在上面自己写参数顶掉这个
    // increment(value) {
    //   this.$store.commit("Increment", value);
    // },
    // increment() {
    //   this.$store.commit("Increment", this.n);
    // },
    // decrement() {
    //   this.$store.commit("Decrement", this.n);
    // },
    ...mapMutations({ increment: "Increment", decrement: "Dcrement" }),

    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n);(n)
    // },
    ...mapActions({incrementOdd:"incrementOdd",incrementWait:"incrementWait"})
  },
  computed: {
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters({ big: "big" }),
  },
};
</script>

<style>
</style>