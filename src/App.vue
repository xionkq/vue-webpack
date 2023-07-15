<!--<script setup>-->
<!--import { ref } from 'vue'-->

<!--const message = ref('Hello World!')-->
<!--</script>-->

<script>
export default {
  data() {
    return {
      message: 1
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
  <router-view></router-view>
</template>

<style>
* {
  color: black;
}
</style>
