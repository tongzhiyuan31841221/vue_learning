<template>
  <ul class="todo-main">
    <MyItem
      @doneChange="sendToList"
      :todo="todo"
      v-for="todo of todos"
      :key="todo.id"
      @delTodo="delTodoId"
      @update="updating"
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
  props: ["todos", "check", "del","updateTodo"],
  methods: {
    sendToList(value) {
      console.log(value);
      this.check(value);
    },
    delTodoId(val) {
      this.del(val)
    },
    updating(id,text){
      console.log(id,text);
      this.updateTodo(id,text)
    }
  },
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