<template>
  <div class="box">
    <h3>{{ title }}</h3>
    <slot :data="foods"></slot>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return { foods: ["火锅", "烧烤", "火锅", "烧烤"] };
  },
  props: ["title"],
};
</script>

<style scoped>
h3 {
  text-align: center;
}
ul {
  width: 150px;
  height: 200px;
  padding: 20px;
  border: 1px solid #000;
}
ul li {
  width: 100%;
  text-align: center;
  margin-top: 8px;
}
</style>