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
    <input type="color" v-model="bgcolor"/>
  </div>
  <div>
    <label>Text Color:</label>
    <input type="color" v-model="textcolor"/>
  </div>
  <div>
    <label>Accent Color:</label>
    <input type="color" v-model="accentcolor"/>
  </div>
</template>

<style>
</style>
