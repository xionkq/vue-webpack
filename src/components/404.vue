<script setup lang="ts">
import { useRoute } from 'vue-router'
import {computed} from "vue";

const route = useRoute()

const routerName = computed(() => {
  return route.params.notFountUrl[0]
})
</script>

<template>
  <div>{{ routerName }}</div>
</template>

<style scoped>

</style>
