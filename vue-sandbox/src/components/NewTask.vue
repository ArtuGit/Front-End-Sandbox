<template>
  <form class="flex my-8" @submit.prevent="SubmitTask">
    <input
      v-model="name"
      class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
      placeholder="Add Task"
      type="text"
    />
    <button
      class="flex-no-shrink flex-grow w-20 p-2 border-2 rounded text-green-600 border-green-600 hover:text-white hover:bg-green-600"
    >
      Add
    </button>
  </form>
</template>

<script>
export default {
  emits: ["add-task"],
  data() {
    return {
      name: ""
    };
  },
  methods: {
    SubmitTask() {
      this.$emit("add-task", this.name);
      this.name = "";
    }
  }
};
</script>

<style scoped></style>
