<template>
  <div>
    <div class="row">
      <div v-for="user of info.users" :key="user.login"  class="card">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <h2 v-show="info.isFirst">欢迎进入GitHub搜索</h2>
    <h2 v-show="info.isLoading">loading...</h2>
    <h2 v-show="info.Error">Error...</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        Error:"",
      },
    };
  },
  methods: {
    receive(data) {
      this.info={...this.info,...data}
      // this.info.users = data.users;
      console.log("已经接受数据",data,this.info);
      this.info.isLoading=false
    },
  },
  mounted() {
    this.$bus.$on("getUsers", this.receive);
  },
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>