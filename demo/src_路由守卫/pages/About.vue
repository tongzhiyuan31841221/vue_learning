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
  // 感觉是平级才切换，子级到父级是没有用的
  beforeRouteEnter(to,from,next){
    console.log("通过路由规则进入该组件，就会触发")
    console.log(to,from,next);
    next()
  },
  beforeRouteLeave(to,from,next){
    console.log("通过路由规则离开该组件，就会触发")
    console.log(to,from,next);
    // next()
  }
};
</script>

<style>
</style>