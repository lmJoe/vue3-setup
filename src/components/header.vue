
<template>
  <div class="header" @click="number++">
    我是响应式变量-{{number}}
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  //定义响应式变量 -ref
  const number = ref(1);
</script>

<style lang="less" scoped>
  .header{
    width:100%;
    height:100px;
    background:#eee;
  }
</style>