<template>
  <li>
    <label>
      <input @click="sendDone" type="checkbox" :checked="todo.done" />
      <span>{{ todo.title }}</span>
      <input ref="edtingbox" v-show="this.todo.isedit" @blur="submittext" v-model="text" type="text" />
    </label>
    <div class="btn-group">
      <button @click="deltodo" class="btn btn-danger">删除</button>
      <button @click="editTodo" class="btn btn-danger btn-edit">编辑</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    show() {
      console.log(this.todo);
    },
    sendDone() {
      this.$emit("doneChange", this.todo);
    },
    deltodo() {
      this.$emit("delTodo", this.todo);
    },
    editTodo(e) {
      
      
      this.todo.isedit = true;
      // 由于vue会等你整个方法执行完毕在重新解析模板，所以执行focus的时候DOM都没出来所以我们是用nextick
       this.$nextTick(function(){
        this.$refs.edtingbox.focus()
      });
      this.text=this.todo.title
      this.todo.title=""
    },
    submittext(){
      
      console.log("提交id数据",this.todo.id);
      this.$emit("update",this.todo.id,this.text)
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 5px;
  display: none;
  margin-top: 3px;
}
li:hover button {
  display: block;
}
li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>