<template>
  <div>
    <div class="form-block mb-3">
      <label class="form-label" for="header">Name: </label>
      <input class="form-control" type="text" v-model="this.newTodo.header" />
    </div>
    <div class="form-block mb-3">
      <label class="form-label" for="header">Assigned to: </label>
      <input class="form-control" type="text" v-model="this.newTodo.assigned" />
    </div>
    <div class="form-block mb-3">
      <label class="form-label" for="content">Description:</label>
      <textarea
        class="form-control"
        style="resize: none"
        rows="3"
        name="content"
        id="content"
        v-model="this.newTodo.content"
      ></textarea>
    </div>
    <div class="form-block text-end">
      <button class="btn btn-primary" @click="addNewTodo">Create task</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItemCreator",
  data() {
    return {
      newTodo: {
        header: "",
        content: "",
        isChecked: false,
        author: "",
      },
    };
  },
  methods: {
    async addNewTodo() {
      await this.$store.dispatch("addNewTodo", this.newTodo);
      this.newTodo.header = "";
      this.newTodo.content = "";
    },
  },
};
</script>
