<template>
  <button
    class="bg-gray-500 text-white font-bold py-1 px-1 rounded focus:outline-none"
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
