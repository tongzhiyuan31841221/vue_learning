<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        ref="input"
      />&nbsp;
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  methods: {
    searchUser(e) {
      console.log("发送请求");
      this.$bus.$emit("getUsers", {
            users: [],
            isFirst: false,
            isLoading: true,
          });
      axios
        .get(`https://api.github.com/search/users?q=${this.$refs.input.value}`)
        .then((res) => {
          console.log(res);
          console.log("已经触发事件");
          this.$bus.$emit("getUsers", {
            users: res.data.items,
            isFirst: false,
            isLoading: true,
          });
        })
        .catch((reason) => {
          console.log(reason);
          this.$bus.$emit("getUsers", { isFirst: false, Error: reason });
        });
    },
  },
};
</script>

<style>
</style>