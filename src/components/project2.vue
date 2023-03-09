<template>
  <div>
    <h2>第二讲：响应式变量的修改-ref</h2>
    今天天气：{{tianqi}}
    <button @click="setQingtain" type="button">晴天</button>
    <button @click="setYintain" type="button">阴天</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
  const tianqi = ref('晴');
  function setQingtain(){
    tianqi.value = '晴天'
  }
  function setYintain(){
    tianqi.value = '阴天'
  }
</script>

<style scoped>

</style>