<template>
  <div>
    <h2>第一讲：声明一个响应式变量-ref</h2>
    <div @click="number++">{{}}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
  const number = ref(1);
</script>

<style scoped>

</style>