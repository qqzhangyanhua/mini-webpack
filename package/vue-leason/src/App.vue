<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div class="container">
  <Editor v-model="state" @change="handelChange"/>

  </div>
</template>

<script setup lang="ts">
import {Ref, provide, ref} from 'vue'
import data from './data.json'
import Editor from './packages/editor'
import {registerConfig} from './utils/editor-config'
import { tsModel2 } from './packages/types'
const state:Ref<tsModel2> = ref(data)
  provide('config',registerConfig)  // config 传递给子组件
const handelChange =(val:any)=>{
  console.log('触发---------',val);
  state.value.blocks.push(val);
  
}
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
