<template>
  <div>
    <h2>About组件内容</h2>
    <div> 
      <ul class="nav nav-tabs">
        <li>
          <router-link active-class="active" class="list-group-item" to="/about/news">News</router-link>
        </li>
        <li>
          <router-link active-class="active" class="list-group-item" to="/about/messages">Message</router-link>
        </li>
      </ul>
      <div>
       <!-- 路由视图 -->
       <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>