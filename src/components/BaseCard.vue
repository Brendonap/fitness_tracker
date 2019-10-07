<template>
  <div>
    <div class="flex flex-wrap mb-2">
      <div class="w-full">
        <div class="bg-white border rounded shadow">
          <div class="flex border-b p-3">
            <h5 class="uppercase text-grey-dark flex-grow">{{ title }}</h5>
            <div class="flex-grow-0">
              <slot name="title" />
            </div>
          </div>
          <div class="p-5">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "",
      required: true
    }
  }
});
</script>
