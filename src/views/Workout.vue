<template>
  <div>
    <top-nav label="this.$router.currentRoute.params.exercise" />
    <div class="border-yellow-500 border-b-2">
      <h2 class="text-2xl ml-5 mt-5">History</h2>
      <div class="flex">
        <div class="flex-wrap ml-5 my-2">
          <p v-for="(exercise, index) in history" :key="index">
            {{ exercise.reps }} {{ exercise.weight }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TopNav from "@/components/TopNav.vue";

export default Vue.extend({
  name: "home",
  data() {
    return {
      showModal: "",
      path: this.$route.path,
      history: [
        {
          reps: 10,
          weight: 60
        },
        {
          reps: 10,
          weight: 60
        }
      ]
    };
  },
  components: {
    TopNav
  },
  methods: {}
});
</script>
