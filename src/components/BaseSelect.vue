<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
  methods: {
    test() {
      this.$emit("change", event);
    }
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: [String, Number],
      default: "Select Option"
    },
    hasDefaultHeading: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<template>
  <div class="relative mb-4">
    <label
      v-if="label.length"
      class="block text-gray-700 text-sm font-bold mb-2"
      for="select"
      >{{ label }}</label
    >
    <select
      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      @change="test"
    >
      <option v-if="hasDefaultHeading">{{ placeholder }}</option>
      <option
        v-else
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === value"
        >{{ option }}</option
      >
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center mt-8 text-gray-700"
    >
      <svg
        class="fill-current h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>
