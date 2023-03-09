<script setup lang="ts">
  import { ref } from "vue";
  import ChildVue1 from "../views/child1.vue";
  const zero = 3;
  const number= ref(zero);
  function reset ():void{
    number.value=zero;
  }
  //通过defineExpose暴露出当前组件实例中的属性和方法
  defineExpose({
    number,
    reset
  })
</script>

<template>
  <div class="fatherBox">
    <h2>第七讲：为组件实例暴露属性或方法</h2>
    <h2>父组件：</h2>
    <button type="button" @click="number--">-</button>
    <input type="number" v-model="number">
    <button type="button" @click="number++">+</button>
  </div>
  <div>
    <button @click="reset">重置（执行reset()）</button>
  </div>
  <div class="children box">
    
    <ChildVue1 />
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