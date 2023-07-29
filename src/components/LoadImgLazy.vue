<script setup lang="ts">
const note = '图片存在缓存时，使用loading="lazy"，不会懒加载'
</script>

<template>
  <div class="box">
    <div>{{ note }}</div>
    <img class="img" src="@/assets/image.png" loading="lazy" alt="">
  </div>
</template>

<style scoped lang="scss">
.box {
  height: 300px;
  overflow: scroll;

  .img {
    margin-top: 300px;
  }
}
</style>
