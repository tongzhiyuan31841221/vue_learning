.vue<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @add="addTotodos"></MyHeader>
      <List
        :updateTodo="updateTodo"
        :todos="todos"
        :check="getDoneChange"
        :del="delTodo"
      ></List>
      <MyFooter
        :todos="todos"
        :countDone="countDone"
        :selectAll="selectAll"
      ></MyFooter>
    </div>
  </div>
</template>
<script>
import { nanoid } from "nanoid";
import List from "./components/List.vue";
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    List,
    MyFooter,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTotodos(value) {
      this.todos.unshift(value);
    },
    getDoneChange(value) {
      //不用全局事件总线不能直接实现孙子到父亲
      console.log("6666", value);
      this.todos.forEach((item) => {
        if (item.id === value.id) {
          item.done = !value.done;
        }
      });
    },
    delTodo(value) {
      this.todos.forEach((item, i) => {
        if (item.id == value.id) this.todos.splice(i, 1);
      });
    },
    countDone() {
      let count = 0;
      this.todos.forEach((val) => {
        if (val.done == true) count++;
      });
      return count;
    },
    selectAll(val) {
      this.todos.forEach((value) => {
        value.done = val;
      });
    },
    updateTodo(editId, val) {
      console.log(editId)
      this.todos.forEach((value) => {
        if ((value.id = editId)) value.title = val;
        value.isedit=false
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(nval) {
        window.localStorage.setItem("todos", JSON.stringify(nval));
      },
    },
  },
};
</script>

<style  >
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-top: 5px;

  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-group {
  float: right;
  width: 150px;
  height: 100%;
}
.btn-group > .btn {
  width: 60px;
  margin-right: 5px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  background-color: #73e939;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>