<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
	<button @click="SendName" >点击我讲学校名传给APP</button>
  </div>
</template>

<script>
export default {
  name: "School",

  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  props:["sendSchoolName"],
  methods:{
	SendName(){
		this.sendSchoolName(this.name)
	}
  }
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>