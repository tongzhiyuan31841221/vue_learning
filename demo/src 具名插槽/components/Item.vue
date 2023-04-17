<template>
  <div class="box">
    <h3>{{ title }}</h3>
    <ul>
      <slot name="content"></slot>
      <slot name="linksss"></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {};
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