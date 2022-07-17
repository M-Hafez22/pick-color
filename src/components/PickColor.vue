<script setup>
import { ref } from "@vue/reactivity";
import { useColorStore } from "../stores/color";

const store = useColorStore();

const bgcolor = ref(store.color.background);
const textcolor = ref(store.color.text);
const accentcolor = ref(store.color.accent);
</script>


<template>
  <div>
    <label>background Color:</label>
    <input type="color" v-model="store.color.background" />
  </div>
  <div>
    <label>Text Color:</label>
    <input type="color" v-model="store.color.text" />
  </div>
  <div>
    <label>Accent Color:</label>
    <input type="color" v-model="store.color.accent" />
  </div>
</template>

<style>
</style>
