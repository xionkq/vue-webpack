<script setup>
import {ref, watch} from "vue";
import Worker from '../script/test.worker.js'

const number1 = ref(0)
const number2 = ref(0)
const result = ref(0)

const worker = new Worker()

watch([number1, number2], () => {
  console.log('change')
  worker.postMessage([number1.value, number2.value])
})

worker.onmessage = (e) => {
  result.value = e.data
}
</script>

<template>
  <input v-model.number="number1">
  <input v-model.number="number2">
  <div>{{ result }}</div>
</template>

<style scoped>

</style>
