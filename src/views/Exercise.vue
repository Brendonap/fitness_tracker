<script lang="ts">
import Vue from "vue";
import Layout from "./Layouts/Main.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseCard from "@/components/BaseCard.vue";
import NewExercise from "@/components/NewExercise.vue";

import db from "@/configs/firebase";

interface SetInfo {
  reps?: number;
  weight?: number;
}

interface Exercise {
  type: string;
  setInfo: Array<SetInfo>;
}

export default Vue.extend({
  components: {
    Layout,
    NewExercise
  },
  watch: {
    exercises: {
      handler() {
        localStorage.setItem("exercises", JSON.stringify(this.exercises));
      },
      deep: true
    }
  },
  created() {
    this.exercises = this.getExercises();
  },
  methods: {
    addExercise() {
      this.exercises.unshift({
        type: "",
        setInfo: []
      });
    },
    save(index: number) {
      db.collection("exercises")
        .add(this.exercises[index])
        .then(docRef => console.info(docRef))
        .catch(error => console.error(error));

      this.remove(index);
    },
    remove(index: number): void {
      this.exercises.splice(index, 1);
    },
    addSet(index: number): void {
      const newSet = {
        reps: 0,
        weight: 0
      };
      if (this.exercises[index].setInfo.length > 0) {
        const newSet = this.exercises[index].setInfo[
          this.exercises[index].setInfo.length - 1
        ];
      }
      this.exercises[index].setInfo.push(newSet);
    },
    removeSet(exerciseIndex: number, setIndex: any): void {
      this.exercises[exerciseIndex].setInfo.splice(setIndex, 1);
    },
    getExercises() {
      return localStorage.getItem("exercises") !== null
        ? (JSON.parse(localStorage.getItem(
            "exercises"
          ) as string) as Exercise[])
        : ([] as Exercise[]);
    }
  },
  data() {
    return {
      exercises: [] as Exercise[],
      showModal: false
    };
  }
});
</script>

<template>
  <layout>
    <div>
      <div v-for="(exercise, index) in exercises" :key="index">
        <NewExercise
          :exerciseData="exercise"
          @addSet="addSet(index)"
          @removeSet="setIndex => removeSet(index, setIndex)"
          @save="save(index)"
          @delete="remove(index)"
        />
      </div>
      <div class="m-4 static">
        <button
          id="show-modal"
          @click="addExercise"
          class="bg-green-500 hover:bg-yellow-500 absolute py-2 px-5 mr-4 text-3xl right-0 text-white font-bold rounded-full"
        >
          +
        </button>
      </div>
    </div>
  </layout>
</template>
