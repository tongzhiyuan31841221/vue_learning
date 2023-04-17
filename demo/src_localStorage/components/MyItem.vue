<template>
  <li @mouseover="showButton" @mouseleave="hiddenButton">
    <label>
      <input @click="checkTitle" type="checkbox" :checked="todo.done" />
      <span>{{ todo.title }}</span>
    </label>
    <button @click="delTitle" class="btn btn-danger" :style="styleObj">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "checkTodo", "delTodo"],
  methods: {
    checkTitle() {
      // console.log(this.todo)
      // console.log(123);
      this.checkTodo(this.todo);
    },
    delTitle() {
      this.delTodo(this.todo.id);
    },
    showButton() {
      this.styleObj.display = "block";
    },
    hiddenButton() {
      this.styleObj.display = "none";
    },
  },
  data() {
    return {
      styleObj: {
        display: "none",
      },
    };
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
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>