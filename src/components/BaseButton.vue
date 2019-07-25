<template>
  <button
    class="bg-gray-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="button"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true
    }
  }
});
</script>
