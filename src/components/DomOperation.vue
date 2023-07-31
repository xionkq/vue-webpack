<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue'

const fragment: Ref<DocumentFragment | null> = ref(null)
const count = ref(0)

onMounted(() => {
  fragment.value = document.createDocumentFragment()
})

function fragmentAdd () {
  const fragmentBox = document.getElementsByClassName('fragment')[0]
  clear(fragmentBox)
  if (fragment.value) {
    fragmentBox.append(fragment.value)
  }
}

function domAdd () {
  const dom = document.getElementsByClassName('dom')[0]
  clear(dom)
  if (fragment.value) {
    dom.append(fragment.value)
  }
}

function add () {
  const div = document.createElement('div')
  div.className = 'item'
  if (fragment.value) {
    count.value++
    fragment.value.append(div)
  }
}

function clear (el: Element) {
  let child = el.firstChild
  while (child) {
    el.removeChild(child)
    child = el.firstChild
  }
  count.value = 0
}
</script>

<template>
  <div class="dom"></div>
  <div class="fragment"></div>
  <div>
    <button @click="domAdd">domAdd</button>
    <button @click="fragmentAdd">fragmentAdd</button>
    <button @click="add">add</button>
    <span>fragment中div数量 {{ count }}</span>
  </div>
  <div>fragment被插入到dom之后就被清空了！！！</div>
</template>

<style scoped lang="scss">
.dom {
  width: 500px;
  height: 300px;
  border: 1px solid blue;
}

.fragment {
  width: 500px;
  height: 300px;
  border: 1px solid blueviolet;
}

:deep(.item) {
  width: 100%;
  height: 100px;
  background: yellow;
}
</style>
