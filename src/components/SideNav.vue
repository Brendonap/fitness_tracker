<template>
  <div class="bg-white shadow w-32 h-full fixed hidden md:block">
    <ul class="list-reset">
      <li>
        <router-link :to="{ name: 'summary' }" :class="applyClasses('summary')"
          >summary</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'exercise' }"
          :class="applyClasses('exercise')"
          >exercise</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    applyClasses(name: String): object {
      const active = name === this.$route.name;
      return {
        "block p-2 text-gray-darker font-bold border-brolly-pink hover:bg-gray-300 border-r-4": active,
        "block p-2 text-gray-darker font-bold border-gray-300 hover:border-brolly-pink hover:bg-gray-300 border-r-4": !active
      };
    }
  }
});
</script>
