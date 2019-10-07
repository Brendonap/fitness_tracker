<script lang="ts">
import Vue from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default Vue.extend({
  components: {
    BaseInput,
    BaseButton,
    BaseCard,
    BaseSelect
  },
  model: {
    prop: "exerciseData"
  },
  data() {
    return {
      exerciseTypes: ["bench", "squats", "rows"]
    };
  },
  methods: {
    updateType(event: string) {
      this.exerciseData.type = event.target.value;
    }
  },
  props: {
    exerciseData: {
      type: Object,
      default: () => []
    }
  }
});
</script>

<template>
  <base-card :title="exerciseData.type || 'new exercise'">
    <template v-slot:title>
      <base-button
        @click="$emit('save', exerciseData.id)"
        class="bg-green-500 mr-2"
        :label="'done'"
      />
      <base-button
        @click="$emit('delete', exerciseData.id)"
        class="bg-red-500"
        :label="'delete'"
      />
    </template>
    <base-select
      :label="exerciseData.type || 'new exercise'"
      :options="exerciseTypes"
      @change="updateType"
    />
    <base-button
      @click="$emit('addSet')"
      :label="`add set`"
      class="bg-green-500"
    />
    <div v-for="(set, index) in exerciseData.setInfo" :key="index" class="flex">
      <base-input label="reps" v-model="set.reps" class="w-4/5 pr-2" />
      <base-input label="weight" v-model="set.weight" class="w-4/5" />
      <base-button
        @click="$emit('removeSet', index)"
        :label="`X`"
        class="bg-red-500 w-1/5 my-8 ml-2"
      />
    </div>
  </base-card>
</template>
