<script setup>
import { ref } from "vue";
import TabbableTextarea from "../components/TabbableTextarea.vue";

let comment = ref("Initial template");
</script>

<template>
  <div class="contact">
    <h1>This is a contact page</h1>
    <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;"></TabbableTextarea>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
