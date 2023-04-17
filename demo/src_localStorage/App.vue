.vue<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addtodo="addtodo"></MyHeader>
      <List :delTodo="delTodo" :checkTodo="checkTodo" :todos="todos"></List>
      <MyFooter
        :clearTodos="clearTodos"
        :selectAll="selectAll"
        :countdone="countdone"
        :todos="todos"
      ></MyFooter>
    </div>
  </div>
</template>

<script>
// 我一开始想的是添加一个value就用id 和value存进去，但是你要想到其实你开始读取数据就有点憨，应该要用函数试了
// 所以watch是个很好的选择，而且是存整个todos

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
    // 可以根据索引来拿key,window.localStorage.key(1)
    //     for (var i=0;i<localStorage.length;i++) {
    // 	console.log(localStorage.key(i));把每个key push一遍
    // }
    return {
      todos: [
        { id: "1", title: "chifan", done: false },
        { id: "2", title: "shuijao", done: true },
        { id: "3", title: "ddddd", done: false },
      ],
    };
  },
  methods: {
    Setlocal(value) {
      window.localStorage.setItem(value.id, JSON.stringify(value));
      console.log(123);
    },

    addtodo(value) {
      console.log(value);
      this.todos.unshift(value);
      this.Setlocal(value);
    },
    checkTodo(value) {
      this.todos.forEach((val) => {
        if (val.id == value.id) {
          val.done = !value.done;
          this.Setlocal(val);
        }
      });
    },
    delTodo(id) {
      this.todos.forEach((val, i) => {
        if (val.id == id) this.todos.splice(i, 1);
      });
    },
    selectAll(val) {
      console.log(val);
      this.todos.forEach((value) => {
        console.log(1);
        value.done = val;
      });
    },
    countdone() {
      let count = 0;
      this.todos.forEach((val) => {
        if (val.done) count++;
        console.log(count);
      });
      return count;
    },
    clearTodos() {
      let length = this.todos.length;
      for (let i = 0; i < length; i++) {
        this.todos.pop();
      }
    },
  },
};
</script>

<style  scoped>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
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

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
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