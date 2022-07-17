<script setup>
import PickColor from "./components/PickColor.vue";
import { useColorStore } from "./stores/color";

const store = useColorStore();
</script>

<template>
  <div>
    <p>The background Color: {{ store.color.background }}</p>
    <p>The Text Color: {{ store.color.text }}</p>
    <p>The Accent Color: {{ store.color.accent }}</p>
  </div>
  <PickColor />
</template>

<style scoped>
</style>
