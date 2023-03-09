<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
//第一种 比较复杂
  //getCurrentInstance取的vue当前挂载的实例
  const currents = getCurrentInstance();
  console.log('当前组件实例',currents.proxy);//打印出的proxy对应的就是当前组件的实例
  console.log('父组件实例',currents.proxy.$parent);

  console.log('父组件实例的方法',currents.proxy.$parent.number);
  console.log('父组件实例的属性',currents.proxy.$parent.reset);
  function abc(){
    //调用父组件的reset方法
    currents.proxy.$parent.reset();
  }
//第二种：比较简单
  //直接在button中使用


</script>

<template>
  <div class="child">
    <h3>子组件</h3>
    <h3>父组件暴露出来的属性由当前子组件简单写法接收{{($parent.number)}}</h3>
    <button type="button" @click="abc">第一种：触发父组件的reset()（比较复杂）</button>
    <button type="button" @click="$parent.reset()">第二种：触发父组件的reset()（比较简单）</button>
  </div>
</template>

<style scoped lang="less">

</style>