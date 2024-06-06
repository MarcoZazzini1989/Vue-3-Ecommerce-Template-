<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <button v-on:click="count++">Click {{ count }}</button>
  </div>
</template>
