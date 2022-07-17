<script setup>
import PickColor from "./components/PickColor.vue";
import { useColorStore } from "./stores/color";

const store = useColorStore();
</script>

<template>
  <div
    class="app"
    :style="{ color: store.color.text, background: store.color.background }"
  >
    <div class="colors">
      <p>The background Color: {{ store.color.background }}</p>
      <p>The Text Color: {{ store.color.text }}</p>
      <p>The Accent Color: {{ store.color.accent }}</p>
    </div>
    <PickColor />
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
