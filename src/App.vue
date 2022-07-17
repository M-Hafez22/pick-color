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
      <p>
        Background Color:
        <span :style="{ boxShadow: `0 0 10px ${store.color.accent}` }">{{
          store.color.background
        }}</span>
      </p>
      <p>
        Text Color:
        <span :style="{ boxShadow: `0 0 8px ${store.color.accent}` }">{{
          store.color.text
        }}</span>
      </p>
      <p>
        Accent Color:
        <span :style="{ boxShadow: `0 0 8px ${store.color.accent}` }">{{
          store.color.accent
        }}</span>
      </p>
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
.colors {
  margin: 0.5em;
  display: flex;
}

.app p {
  font-size: 1.5em;
  padding: 0.25em;
  margin: 0.25em;
  width: fit-content;
}
span {
  padding: inherit;
  box-shadow: 0px 0px 8px;
  border-radius: 0.3em;
}
</style>
