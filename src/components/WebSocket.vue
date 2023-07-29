<script setup>
import { reactive, ref } from 'vue'

const message = reactive([])
const inputValue = ref('')

// origin: http://www.websocket-test.com/
const TEST_LINK = 'ws://124.222.224.186:8800'
const ws = new WebSocket(TEST_LINK)

ws.addEventListener('message', (e) => {
  message.push(e.data)
})

function send () {
  ws.send(inputValue.value)
}

function close () {
  ws.close()
}
</script>

<template>
  <div v-for="item of message">{{ item }}</div>
  <input v-model="inputValue">
  <button @click="send">send</button>
  <button @click="close">close</button>
</template>

<style scoped>

</style>
