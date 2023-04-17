<template>
  <div>
    <ul>
      <li>
        <router-link
          :to="{
            name: 'newsDetail',
            params: {
              joke: jokes,
            },
          }"
          >这是news组件，点击跳转到，新闻详情</router-link
        >
      </li>
    </ul>
    <keep-alive>
      <!-- 
      <组件一>
        <组件二></组件二>
      </组件一>
      <组件三></组件三>  当你切到组件三，其实组件一和组件二都被销毁了，就算你组件二有keep-alive也没有用 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: ["messages001", "messages002", "messages003"],
      jokes: ["joke001", "joke002", "joke003"],
    };
  },
  beforeDestroy() {
    console.log("news 将被销毁");
  },
};
</script>

