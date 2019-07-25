<template>
  <form class="w-full">
    <div class="flex -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <base-input v-bind="input1" label="input" placeholder="input" />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <base-input v-bind="input1" label="input" placeholder="input" />
      </div>
      <div class="w-full md:w-1/2 px-3">
        <base-input v-bind="input1" label="input" placeholder="input" />
      </div>
    </div>
    <div class="flex flex-wrap">
      <base-button label="click me" @click="submitForm" />
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default Vue.extend({
  components: {
    BaseInput,
    BaseButton
  },
  methods: {
    submitForm: () => {
      console.log("here");
    }
  },
  data() {
    return {
      input1: ""
    };
  }
});
</script>
