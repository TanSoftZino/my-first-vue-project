<script setup>
import { useFlash } from '../composables/useFlash';
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";
import { useStorage } from "../composables/useStorage.js";
import { provide } from "vue";
import { state } from "../stores/quizStore.js";

let doc = ref("Documentation");

provide('key',{
  doc,
  changeDoc: () => doc.value = "Not a Documentation Anymore",
});
let hello = ref("Hello World");


let { flash } = useFlash();

setTimeout(() => {
  hello.value = "Value changed";
}, 2000);

// let clicked = () => {
//   alert("You clicked the button!");
// };
let food = useStorage("food");
let age = ref(localStorage.getItem("age"));
let method = useStorage("method", "default");
let obj = useStorage('obj', { one: 'one' });

setTimeout(() => {
  food.value = "pizza";
}, 3000);
// let flash = (message) => {
//   swal(message);
// };
function write(key, value) {
  localStorage.setItem(key, value);
}

</script>

<template>
  <main>
    <button @click="state.name = 'Changed'">Press to change state name</button>
    {{ state.name }}
    {{ doc }}
    <TheWelcome />
    <p>
      {{ hello }}
    </p>
    <p>
      <input type="text" v-model="hello" />
    </p>
    <button @click="flash('Successful!', 'Random message!', 'info')">click me</button>
    <div>
      <p>What's your favourite food?</p>
      <input type="text" v-model="food" />
      <p>What's your Age</p>
      <input type="number" v-model="age" @input="write('age', age)" />
      <p>something new to track</p>
      <input type="text" v-model="method" />
    </div>
  </main>
</template>
