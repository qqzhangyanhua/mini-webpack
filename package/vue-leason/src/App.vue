<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div class="container">
  <Editor v-model="state"/>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import data from './data.json'
import Editor from './packages/editor'
const state = ref(data)


</script>
<style lang="scss">
.container{
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
}
</style>
