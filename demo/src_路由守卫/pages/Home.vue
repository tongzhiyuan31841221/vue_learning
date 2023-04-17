<template>
  <div>
    <!-- query参数 -->
    <h2>Home组件内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/news"
          >News</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/messages"
          >Message</router-link
        >
      </li>
    </ul>
    <hr style="border:3px solid #000">
    <div >
      <!-- 路由视图 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>