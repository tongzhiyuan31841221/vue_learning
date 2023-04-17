<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>
    <School :sendSchoolName="sendSchoolName" />
    <Student v-on:namingzi="GetStudentName" />
    <!-- <Student ref="get" /> -->
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
      studentName: "",
    };
  },
  methods: {
    sendSchoolName(val) {
      console.log("App已经收到数据", val);
    },
    GetStudentName(val,...arg) {
      console.log("getStudentName已经被调用", val);
    },
   
  },
  mounted(){
    console.log(this.$refs.get);
    // this.$refs.get.$on("namingzi",this.GetStudentName)
    // this.$refs.get.$once("namingzi",this.GetStudentName)

    //这种非常强大可以结合异步，比如定时器
  }
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
