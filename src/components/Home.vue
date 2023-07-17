<script setup>
import {nextTick, onActivated, onBeforeMount, onDeactivated, onMounted, reactive, ref, getCurrentInstance} from "vue";
import {useCounterStore} from "../store/counter";

let divRef = ''
const message = ref('home')

// // 钩子函数
// console.log('setup', divRef.value)
// onActivated(() => {
//   console.log('onActivated', divRef.value)
// })
// onDeactivated(() => {
//   console.log('onDeactivated', divRef.value)
// })
// onBeforeMount(() => {
//   console.log('onBeforeMount', divRef.value)
// })
onMounted(() => {
  console.log('onMounted', divRef.value)
  console.log(getCurrentInstance())
})
//
// // nextTick()
// async function updateMessage() {
//   console.log('divRef', divRef.textContent)
//   message.value = 'message1'
//   console.log('divRef', divRef.textContent)
//   message.value = 'message2'
//   console.log('divRef', divRef.textContent)
//   message.value = 'message3'
//   console.log('divRef', divRef.textContent)
//   await nextTick()
//   console.log('divRef', divRef.textContent)
// }

const a = reactive({
  b: ref(1),
  c: 2,
})

const counterStore = useCounterStore()
counterStore.add()
console.log(counterStore.count)
console.log(counterStore.count1)
console.log(counterStore.computedX)
</script>

<template>
  <div ref="divRef" v-if="$slots">{{ message }}</div>
</template>

<style scoped lang="scss">
div {
  --color: #000000;
  $color: #000000;

  color: var(--color);
  //background: $color;
}
</style>
