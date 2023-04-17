<template>
  <div class="container">
    <h2 >学校名称{{ name }}</h2>
    <h2>学校地址{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "zheshida",
      address: "jinhua",
    };
  },
 
};
</script>

<style>
.container {
  background: pink;
}
</style>