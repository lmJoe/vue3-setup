<script setup lang="ts">
  import { ref } from "vue";
  import ChildVue from "../views/child.vue";
  const zero = 3;
  const number= ref(zero);
  function reset ():void{
    number.value=zero;
  }
</script>

<template>
  <div class="fatherBox">
    <h2>第六讲：组件传值（父传子,包含自定义事件子组件调用父组件方法）</h2>
    <h2>父组件：</h2>
    <button type="button" @click="number--">-</button>
    <input type="number" v-model="number">
    <button type="button" @click="number++">+</button>
  </div>
  <div class="children box">
    <ChildVue @shijian="reset" :prop1="number" />
    <!-- 没传任何值 -->
    <!-- <ChildVue /> -->
  </div>
</template>

<style scoped lang="less">
.fatherBox{
  button{
    width:20px;
    height:20px;
  }
}
.children{
  margin-top:20px;
}
</style>