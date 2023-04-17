<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">点击我用自定义事件讲学生名传给APP</button>
    <button @click="unbind">点击解绑那名字事件</button>
    <button @click="destroy">点击销毁VC</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    sendStudentName() {
      this.$emit("namingzi", this.name); //通过手动触发这个事件
    },
    unbind() {
      this.$off("namingzi");
    //   this.destroyed();
    },
    destroy() {
      setTimeout(() => {
        console.log("3秒已到自毁程序启动");
        this.$destroy();
      }, 3000);
    },
  },
  destroyed(){
	console.log("我死了");
  }
};
</script>

<style  scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
