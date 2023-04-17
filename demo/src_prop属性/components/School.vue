<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>学校名称  :{{ name }}</h2>
    <h2>学校地址  :{{ address }}</h2>
    <h2>学校年龄  :{{ parseInt(age)+1 }}</h2>
    <h2>学校年龄  :{{ age+2 }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "props",
      
    };
  },
  // props:["name","address","age"]纯粹传参数，最好有事和配合bind
  // props:{
  //   // 限制类型
  //   name:String,
  //   age:Number,
  //   address:String
  // }
  props:{
    name:{
      required:true,
      type:String
    },
    age:{
      type:Number,
      default:18
    },
    address:{
      type:String
    }
  }
};
</script>
