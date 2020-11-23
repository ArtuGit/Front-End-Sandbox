<template>
  <!-- component -->
  <div class="flex items-center justify-center">
    <div class="bg-white border rounded shadow-xl p-6">
      <div class="mb-4">
        <h1 class="text-3xl text-gray-700">Todo List</h1>
        <new-task @add-task="addTask"></new-task>
      </div>
      <div>
        <task
          v-for="task in tasks"
          :key="task.id"
          :p-done="task.done"
          :p-id="task.id"
          :p-name="task.name"
          @delete="deleteTask"
          @toggle-done="toggleDone"
        >
        </task>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: "1",
          name: "Add another task",
          done: false
        },
        {
          id: "2",
          name: 'Mark a task as "Done"',
          done: false
        },
        {
          id: "3",
          name: 'Mark a task as "Not Done"',
          done: true
        },
        {
          id: "4",
          name: "Remove a task",
          done: false
        }
      ]
    };
  },
  methods: {
    toggleDone(taskdId) {
      const identifiedTask = this.tasks.find(task => task.id === taskdId);
      identifiedTask.done = !identifiedTask.done;
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    addTask(name) {
      const newTask = {
        id: new Date().toISOString(),
        name: name,
        done: false
      };
      this.tasks.unshift(newTask);
    }
  }
};
</script>

<style>
@import "../dist/css/main.css";
</style>
