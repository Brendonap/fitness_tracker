<template>
  <div class="mb-4">
    <label
      v-if="label.length"
      class="block text-gray-700 text-sm font-bold mb-2"
      for="username"
      >{{ label }}</label
    >
    <input
      id="input"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    }
  }
});
</script>
