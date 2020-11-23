<template>
  <!-- component -->
  <div class="flex items-center justify-center">
    <div class="bg-white border rounded shadow-xl p-6">
      <div class="mb-4">
        <h1 class="text-3xl text-gray-700">Todo List</h1>
        <div class="flex my-8">
          <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                 placeholder="Add Todo">
          <button
              class="flex-no-shrink flex-grow w-20 p-2 border-2 rounded text-green-600 border-green-600 hover:text-white hover:bg-green-600">
            Add
          </button>
        </div>
      </div>
      <div>
        <div class="flex mb-4 items-center">
          <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
          <button
              class="text-sm flex-no-shrink p-2 ml-4 mr-2 border-2 rounded shadow hover:text-white done">
            Done
          </button>
          <button
              class="text-sm flex-no-shrink p-2 ml-2 border-2 rounded shadow text-red-600 border-red-600 hover:text-white hover:bg-red-600">
            Remove
          </button>
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
          <button
              class="text-sm flex-no-shrink flex-grow p-2 ml-4 mr-2 border-2 rounded shadow hover:text-white not-done">
            Not Done
          </button>
          <button
              class="text-sm flex-no-shrink p-2 ml-2 border-2 rounded shadow text-red-600 border-red-600 hover:text-white hover:bg-red-600">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@import '../dist/css/main.css';
</style>
