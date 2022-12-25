<script setup>
import { useFlash } from '../composables/useFlash';
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";

let hello = ref("Hello World");

let { flash } = useFlash();

setTimeout(() => {
  hello.value = "Value changed";
}, 2000);

// let clicked = () => {
//   alert("You clicked the button!");
// };
let food = ref('');

// let flash = (message) => {
//   swal(message);
// };
</script>

<template>
  <main>
    <TheWelcome />
    <p>
      {{ hello }}
    </p>
    <p>
      <input type="text" v-model="hello" />
    </p>
    <button @click="flash('Successful!', 'Random message!', 'info')">click me</button>
    <div>
      <input type="text" v-model="food" />
    </div>
  </main>
</template>
