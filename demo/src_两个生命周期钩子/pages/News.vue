<template>
  <div>
    <ul>
      <li>
        <!-- 为了方便我们只在news和message两个组件中分析 -->
        <router-link
          :style="{ opacity: opacity }"
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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: ["messages001", "messages002", "messages003"],
      jokes: ["joke001", "joke002", "joke003"],
      opacity: 1,
    };
  },

  activated() {
    // 这两个钩子一定要在keep-alive标签中才会有用不然切来切去也看不出来
    console.log("new组件被激活");
    setInterval(() => {
      this.opacity -= 0.01;

      if (this.opacity <= 0.3) this.opacity = 1;
    }, 30);
  },
  deactivated() {
    console.log("new组件被销毁");
  },
};
</script>

