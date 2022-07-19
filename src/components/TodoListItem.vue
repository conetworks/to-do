<template>
  <li
    class="list-group-item"
    style="--bs-bg-opacity: 0.2"
    :class="getBackground"
  >
    <div style="flex; flex-direction:row">
      <h5 class="mt-1 text-wrap" style="flex;">
        {{ this.item.header }}
      </h5>
      <h5>
        {{ this.item.state }}
      </h5>
    </div>
    <div>
      <h5>
        {{ this.item.assigned }}
      </h5>
    </div>

    <p class="text-wrap">
      {{ this.item.content }}
    </p>
    <div class="text-end mb-2">
      <button class="btn btn-success me-2" @click="checkTodo">Check</button>
      <button class="btn btn-outline-danger" @click="deleteTodo">Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  data() {
    return {
      state: "",
    };
  },
  props: {
    item: {
      id: String,
      author: String,
      header: String,
      content: String,
      isChecked: Boolean,
      assigned: String,
    },
  },
  computed: {
    getBackground() {
      return this.item.isChecked ? "bg-success" : "bg-warning";
    },
  },
  methods: {
    checkTodo() {
      const todoData = {
        id: this.item.id,
        currentCheckState: this.item.isChecked,
      };
      this.$store.dispatch("checkTodo", todoData);
    },

    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.item.id);
    },
    changeState() {
      if (this.state == "") {
        this.state = "To-do";
      } else if (this.state == "To-do") {
        this.state = "In progress";
      } else if (this.state == "In progress") {
        this.state = "Done";
      } else if (this.state == "Done") {
        this.state = "To-do";
      }
      const todoState = {
        id: this.item.id,
        currentState: this.state,
      };
      this.$store.dispatch("changeState", todoState);
    },
  },
};
</script>
<style scoped>
.text-wrap {
  white-space: pre-line;
  overflow-wrap: break-word;
}
</style>
