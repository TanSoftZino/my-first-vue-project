<script setup>
import { counter } from "../stores/counter.js";
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>
        <button @click="counter.increment()">Press this to increment!</button>
    </div>
</template>