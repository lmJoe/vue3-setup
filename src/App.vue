<script setup lang="ts">
import MyHeaderVue from "./views/MyHeader.vue";
//局部注册组件
// import MyFooter from "./views/MyFooter.vue";
</script>

<template>
  <MyHeaderVue />
  <RouterView />
  <!-- 已在app全局已注册该组件 -->
  <MyFooterVue />
</template>

<style scoped>

</style>
