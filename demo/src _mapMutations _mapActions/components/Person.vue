<template>
  <div>
    <h1>人员列表</h1>
    <ul>
      <li><input v-model="id" type="text" placeholder="点击添加人员" /></li>
      <li><input v-model="name" type="text" placeholder="点击添加人员" /></li>
    </ul>
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="person in $store.state.personList" :key="person.id">
        职工姓名：{{ person.name }}||职工id：{{ person.id }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Person",
  data() {
    return {
      id: "",
      name: "",
    };
  },
  methods: {
    addPerson() {
      if (this.id.trim() != "" && this.name.trim() != "") {
        this.$store.dispatch("addperson", { id: this.id, name: this.name });
      } else {
        alert("???????");
      }

      // this.$store("addPerson",)
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
}
</style>