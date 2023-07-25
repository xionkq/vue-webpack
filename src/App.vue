<script setup lang="ts">
// composition api
import {computed, ref} from 'vue'
import router, { ROUTE } from './router'
import WebSocket from './components/WebSocket.vue'
import WebWorker from './components/WebWorker.vue'
import SemanticTag from './components/SemanticTag.vue'

const key = ref('')

const activeKey = computed({
  get: () => {
    return key.value
  },
  set: (v: ROUTE) => {
    key.value = v
    router.push(v)
  }
})

const tabs = computed(() => {
  const obj: { name: string }[] = []
  for (const [key, value] of Object.entries(ROUTE)) {
    obj.push({
      name: value
    })
  }
  return obj
})

function goPage() {
  router.push('page')
}

function goHome() {
  router.push('home')
}
</script>

<template>
  <div v-for="item of tabs" @click="activeKey = item.name">{{item.name}}</div>
<!--  <WebSocket></WebSocket>-->
<!--  <WebWorker></WebWorker>-->
  <SemanticTag></SemanticTag>
  <router-view v-slot="{ Component }" class="router-view">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

</template>

<style>
* {
  color: black;
}
</style>
