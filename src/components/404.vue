<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { switchLanguage } from '@/local'

const route = useRoute()

const routerName = computed(() => {
  return route.params.notFountUrl[0]
})
</script>

<template>
  <div @click="switchLanguage('zh-CN')">{{ $t('hello.helloWorld') }}</div>
  <div>{{ routerName }}</div>
</template>

<style scoped>

</style>
