<script setup lang="ts">
import {ipcRenderer} from 'electron';
const send = () => {
  ipcRenderer.send('message', 'hello from vite electron');
}
ipcRenderer.on('load', (event, arg) => {
  console.log('00000000000000',arg);
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <!-- <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
    </a>
    <button @click="send">按扭11111111111</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
