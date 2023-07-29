import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const count1 = ref(0)
  const x = 1

  const computedX = computed(() => x)

  function add () {
    count.value++
  }

  return {
    count,
    count1,
    x,
    computedX,
    add
  }
})
