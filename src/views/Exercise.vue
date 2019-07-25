<template>
  <div>
    <top-nav />
    <div class="mt-1">
      <ul
        v-for="(exercise, index) in exercises"
        :key="index"
        class="flex text-center border-b-2 border-yellow-500 px-5 pt-5 pb-5 w-full"
      >
        <li class="mr-6">
          <router-link
            :to="{ name: 'workout', params: { exercise: exercise } }"
            >{{ exercise }}</router-link
          >
        </li>
      </ul>
      <div class="m-4 static">
        <button
          id="show-modal"
          @click="showModal = true"
          class="bg-gray-700 hover:bg-yellow-500 absolute py-2 px-5 mr-4 text-3xl right-0 text-white font-bold rounded-full"
        >
          +
        </button>
      </div>
      <modal
        v-if="showModal"
        @submit="addNewExercise"
        @close="showModal = false"
      >
        <template v-slot:header
          >Add New Exercise</template
        >
        <template v-slot:input>
          <base-input label="exercise name" v-model="newExericse"></base-input>
        </template>
      </modal>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopNav from "@/components/TopNav.vue";
import BaseInput from "@/components/BaseInput.vue";

import Modal from "@/components/Modal.vue";

export default Vue.extend({
  components: {
    TopNav,
    BaseInput,
    Modal
  },
  data() {
    return {
      exercises: ["bench", "squat"],
      showModal: false,
      newExericse: ""
    };
  },
  methods: {
    addNewExercise: function() {
      if (this.newExericse) {
        this.exercises.push(this.newExericse);
        this.newExericse = "";
      }
      this.showModal = false;
    }
  }
});
</script>
