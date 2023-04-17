<template>
  <div class="todo-footer">
    <label @click="select" :checked="state">
      <input type="checkbox" />
    </label>
    <span>已完成{{ count() }}/ 全部{{ todos.length }} </span>
    <button @click="clearTodos" class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      state: "",
    };
  },
  methods: {
    select() {
      this.state = !this.state;
      console.log(this.state);
      this.selectAll(this.state);
    },
    count() {
      return this.countdone();
    },
  },
  props: ["selectAll", "countdone", "todos", "clearTodos"],
};
</script>


<style  scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>