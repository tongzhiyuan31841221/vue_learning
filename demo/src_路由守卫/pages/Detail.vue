<template>
  <ul>
    <li v-for="(item, index) in joke" :key="index">
      {{ item }}
      <input type="text" placeholder="请输入" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["joke"],

  methods: {
    pushShow(index) {
      this.$router.push({
        name: "homeMessage",
        params: {
          message: this.joke[index],
        },
      });
    },
    replaceShow(index) {
      this.$router.replace({
        name: "homeMessage",
        params: {
          message: this.joke[index],
        },
      });
    },
  },
};
</script>

<style>
</style>