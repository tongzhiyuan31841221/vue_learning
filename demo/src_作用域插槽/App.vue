<template>
  <div class="container">
    <!--这是最low的做法
    <Item :foods="foods"></Item>
    <Item :games="games"></Item>
    <Item :moives="moives"></Item> 
      -->

    <Item title="foods">
      <template scope="scopeData">
        <ul>
          <li v-for="(food, index) in scopeData.data" :key="index">
            {{ food }}
          </li>
        </ul>
      </template>
    </Item>
    <Item title="foods">
      <template slot-scope="scopeData">
        <ul>
          <h4 v-for="(food, index) in scopeData.data" :key="index">
            {{ food }}
          </h4>
        </ul>
      </template>

    </Item>
        <Item title="foods">
      <template slot-scope="{data}">
        <ul>
          <li v-for="(food, index) in data" :key="index">
            {{ food }}
          </li>
        </ul>
      </template>
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
      str: "linksss",
      listData: {
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
