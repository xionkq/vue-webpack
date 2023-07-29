<script setup lang="ts">
import { onMounted, ref } from 'vue'

let divRef: HTMLElement | null = null
const count = ref(5)
const loading = ref(false)
const tableData = ref([1, 2, 3, 4])

const debounceGetData = debounce(() => getData())
const throttleGetData = throttle(() => getData())

onMounted(() => {
  if (divRef) {
    divRef.addEventListener('scroll', function (e) {
      if (divRef) {
        const isScrolledToBottom = divRef.scrollTop + divRef.clientHeight >= divRef.scrollHeight;
        if (isScrolledToBottom) {
          loading.value = true
          throttleGetData()
        }
      }
    })
  }
})

async function getData () {
  try {
    const newData = await fakeData()
    tableData.value.push(...newData)
  } catch (e) {
    // do something
  } finally {
    loading.value = false
  }
}

async function fakeData () {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve([count.value++, count.value++])
    }, 1000)
  })
}

function debounce(func: (() => void) | (() => Promise<void>)) {
  let timer: NodeJS.Timeout | null = null
  return () => {
    if (timer) {
      console.log('clear')
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      console.log('success')
      func()
    }, 2000)
  }
}

function throttle(func: (() => void) | (() => Promise<void>)) {
  let timer: NodeJS.Timeout | null = null
  return () => {
    if (!timer) {
      func()
      console.log('success')
      timer = setTimeout(() => {
        timer = null
      }, 5000)
    }
  }
}

function reset() {
  tableData.value = [1, 2, 3, 4]
}
</script>

<template>
  <div class="box" ref="divRef">
    <div class="item" v-for="item of tableData" :key="item">{{ item }}</div>
    <div v-show="loading">loading...</div>
  </div>
  <button @click="reset">reset</button>
</template>

<style scoped lang="scss">
.box {
  height: 300px;
  overflow: scroll;

  .item {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid yellow;
  }
}
</style>
