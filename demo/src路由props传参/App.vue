<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
      <RouterNav></RouterNav>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由视图展示区 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import RouterNav from "./components/RouterNav.vue";
export default {
  name: "App",
  components: {
    About,
    Home,
    RouterNav
  },
};
</script>


