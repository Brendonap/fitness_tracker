<template>
  <transition name="modal">
    <div class="fixed z-50 top-0 left-0 w-full h-full table">
      <div class="table-cell align-middle">
        <div class="w-3/5 m-auto pb-10 pt-5 px-5 bg-white border-2 shadow-lg">
          <div class="mt-0 border-b-2 border-yellow-500 mb-5">
            <slot name="header">default header</slot>
            <button class="float-right" @click="$emit('close')">close</button>
          </div>

          <div class="modal-footer">
            <slot name="input"></slot>
            <button class="float-right" @click="$emit('submit')">OK</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {},
  data() {
    return {
      newExercise: ""
    };
  }
});
</script>
