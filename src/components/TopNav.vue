<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    label: {
      type: String
    }
  },
  methods: {
    applyClasses(name: String): object {
      const active = name === this.$route.name;
      return {
        "text-white hover:text-yellow-500 font-bold border-b-2 border-yellow-500": active,
        "text-white hover:text-yellow-500": !active
      };
    }
  }
});
</script>

<template>
  <div class="bg-gray-700">
    <div class="flex ml-5">
      <span>
        <ul class="flex h-20 text-center">
          <img src="@/assets/menu.svg" />
          <h1 class="text-yellow-500 text-4xl ml-10 mt-3">WeWorkOut</h1>
        </ul>
      </span>
    </div>
    <ul class="flex mb-2 ml-5 w-full">
      <li class="mr-6">
        <router-link :to="{ name: 'home' }" :class="applyClasses('home')"
          >Summary</router-link
        >
      </li>
      <li class="mr-6">
        <router-link
          :to="{ name: 'exercise' }"
          :class="applyClasses('exercise')"
          >Exercise</router-link
        >
      </li>
      <li class>
        <button class="text-white outline-none">logout</button>
      </li>
    </ul>
  </div>
</template>
