<template>
  <div class="container">
    <!--这是最low的做法
       <Item :foods="foods"></Item>
    <Item :games="games"></Item>
    <Item :moives="moives"></Item>   -->

    <Item title="foods">
      <li slot="content" v-for="(item, index) in listData.foods" :key="index">
        {{ item }}
      </li>
      <img slot="linksss" src="./assets/logo.png" alt="" />
    </Item>
    <Item title="games">
      <li slot="content" v-for="(item, index) in listData.games" :key="index">
        {{ item }}
      </li>
    </Item>
    <Item title="moives">
      <li slot="content" v-for="(item, index) in listData.moives" :key="index">
        {{ item }}
      </li>
      <video
        :slot="str"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Item>
  </div>
</template>

<script>
// 主要注意的是slot不需要绑定，毕竟本来就是一个字符串，不是字符串采用v-bind
import Item from "./components/Item.vue";
export default {
  name: "App",
  data() {
    return {
      str:"linksss",
      listData: {
        foods: ["火锅", "烧烤", "火锅", "烧烤"],
        games: ["红警", "穿越火线", "红警", "穿越火线"],
        moives: ["教父", "肖申克的救赎", "教父", "肖申克的救赎"],
      },
    };
  },
  components: {
    Item,
  },
};
</script>

<style >
.container {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-around;
}
ul {
  text-align: center;
}

video {
  width: 100%;
}
img {
  width: 100px;
}
</style>
