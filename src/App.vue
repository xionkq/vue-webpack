<script setup lang="ts">
import { computed, ref } from 'vue'
import router, { ROUTE } from './router'

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
  const obj: Array<{ name: string }> = []
  for (const [key, value] of Object.entries(ROUTE)) {
    obj.push({
      name: value
    })
  }
  return obj
})
</script>

<template>
  <div v-for="item of tabs" @click="activeKey = item.name">{{item.name}}</div>
<!--  1. router-view：vue-router的目标容器，组件的更新会渲染于此。-->
<!--  2. keep-alive：缓存组件，并不会触发销毁生命周期，而是触发active和deactive.-->
<!--  3. component配合slot：实现组件动态切换。-->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

</template>

<style>
* {
  color: black;
  box-sizing: border-box;
}
</style>
