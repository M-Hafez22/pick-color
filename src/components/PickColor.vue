<script setup>
import { ref } from "@vue/reactivity";
import { useColorStore } from "../stores/color";

const store = useColorStore();

</script>


<template>
  <div class="pickColor">
    <div class="color-input">
      <label>background Color: </label>
      <input type="color" v-model="store.color.background" />
    </div>
    <div class="color-input">
      <label>Text Color: </label>
      <input type="color" v-model="store.color.text" />
    </div>
    <div class="color-input">
      <label>Accent Color: </label>
      <input type="color" v-model="store.color.accent" />
    </div>
  </div>
</template>

<style>
.pickColor {
  margin: auto;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
}
.color-input {
  margin: 0em;
  padding: 0.15em;
  font-size: 2em;
}
</style>
