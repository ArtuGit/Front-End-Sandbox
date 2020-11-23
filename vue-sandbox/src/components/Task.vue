<template>
  <div class="flex mb-4 items-center">
    <p class="w-full text-grey-darkest">{{ pName }}</p>

    <button
      v-if="pDone"
      class="text-sm flex-no-shrink flex-grow p-2 ml-4 mr-2 border-2 rounded shadow hover:text-white not-done"
      @click="toggleDone"
    >
      Not Done
    </button>

    <button
      v-else
      class="text-sm flex-no-shrink p-2 ml-4 mr-2 border-2 rounded shadow hover:text-white done"
      @click="toggleDone"
    >
      Done
    </button>

    <button
      class="text-sm flex-no-shrink p-2 ml-2 border-2 rounded shadow text-red-600 border-red-600 hover:text-white hover:bg-red-600"
      @click="$emit('delete', pId)"
    >
      Remove
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pId: {
      type: String,
      required: true
    },
    pName: {
      type: String,
      required: true,
      validator: function(value) {
        return value.length <= 100;
      }
    },
    pDone: {
      type: Boolean
    }
  },
  emits: ["toggle-done", "delete"],
  methods: {
    toggleDone() {
      this.$emit("toggle-done", this.pId);
    }
  }
};
</script>

<style scoped></style>
