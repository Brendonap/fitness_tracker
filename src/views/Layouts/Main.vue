<script lang="ts">
import Vue from "vue";
import TopNav from "@/components/TopNav.vue";
import * as firebase from "firebase/app";

// var provider = new firebase.auth.GoogleAuthProvider();

export default Vue.extend({
  name: "Layout",
  components: {
    TopNav
  }
});
</script>

<template>
  <div>
    <div>
      <topNav />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
