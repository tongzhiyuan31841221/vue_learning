<template>
  <div class="list-group">
    <router-link active-class="active" class="list-group-item" to="/about">About</router-link>
    <router-link active-class="active" class="list-group-item" to="/home">Home</router-link>
  </div>
</template>

<script>
export default {
    name:"RouterNav",
};
</script>

<style>
</style>