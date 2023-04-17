<template>
  <div class="todo-header">
    <input
      @keyup.enter="addTodo"
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  methods: {
    addTodo(e) {
      if (e.target.value.trim() == "") {
        console.log("输入为空");
        return;
      } else {
        const todo = {
          id: nanoid(),
          title: e.target.value.trim(),
          done: false,
          isedit:false
        };
        this.$emit("add", todo);
        e.target.value = "";
      }
    },
  },
  props: ["todos"],
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>