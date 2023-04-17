<template>
  <div class="container">
    <!--这是最low的做法
       <Item :foods="foods"></Item>
    <Item :games="games"></Item>
    <Item :moives="moives"></Item>   -->
    <Item title="foods" :listData="listData.foods"></Item>
    <Item title="games" :listData="listData.games"></Item>
    <Item title="moives" :listData="listData.moives"></Item>
  </div>
</template>

<script>
import Item from "./components/Item.vue";
export default {
  name: "App",
  data() {
    return {
      listData:{
        foods: ["火锅", "烧烤", "火锅", "烧烤"],
      games: ["红警", "穿越火线", "红警", "穿越火线"],
      moives: ["教父", "肖申克的救赎", "教父", "肖申克的救赎"],
      }
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
  height: 300px;
  display: flex;
  justify-content: space-around;
}
</style>
