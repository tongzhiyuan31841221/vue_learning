<template>
  <ul class="todo-main">
    <MyItem
      :delTodo="delTodo"
      :checkTodo="checkTodo"
      :todo="todo"
      v-for="todo in todos"
      :key="todo.id"
    ></MyItem>
    <!-- <MyItem v-for="todoobj in todos" :key="todoobj.id" :item="todo"></MyItem> -->
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "List",
  components: {
    MyItem,
  },
  props: ["todos", "checkTodo", "delTodo"],
};
</script>

<style  scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>