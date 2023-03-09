<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";

</script>

<template>
  <div class="child">
    <h3>子组件</h3>
    <div class="card-title">
      <slot name="title">秋天到了</slot>
    </div>
    <div class="card-content">
      <slot>秋天到了秋天到了秋天到了秋天到了秋天到了秋天到了秋天到了秋天到了秋天到了</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">more</slot>
    </div>
  </div>
</template>

<style scoped lang="less">
  .card-title{
    font-size:23px;
    margin-bottom:10px;
  }
  .card-footer{
    margin-top:30px;
  }
</style>