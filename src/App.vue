<script setup>
// composition api
import { ref } from 'vue'
import router from './router'
import WebSocket from './components/WebSocket.vue'
import WebWorker from './components/WebWorker.vue'
import SemanticTag from './components/SemanticTag.vue'

const message = ref('Hello World!')

function goPage() {
  router.push('page')
}

function goHome() {
  router.push('home')
}
</script>

<!--<script>-->
<!--// options api-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      message: 1-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <h1 @click="goPage">{{ message }}</h1>
  <h1 @click="goHome">{{ message }}</h1>
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
