<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'

const divRef = ref('')
//
// console.log('setup', divRef.value)
//
// onBeforeMount(() => {
//   console.log('onBeforeMount', divRef.value)
// })
//
// onMounted(() => {
//   console.log('onMounted', divRef.value)
// })
</script>

<template>
  <div ref="divRef">Page</div>
</template>

<style scoped>

</style>
