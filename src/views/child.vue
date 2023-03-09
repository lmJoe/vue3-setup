<script setup lang="ts">
  //使用defineProps接收父组件传过来的值
  // defineProps({
  //   prop1:Number,//接收prop1,数值类型为number
  // });
  defineProps({
    prop1:{
      type:Number,
      required:true,//如果为true 则父组件prop1的值为必传
      default:999,//父组件没传值的时候 prop1的默认值

    }
  })
  //当前子组件接收父组件的方法shijian0（简单功能）
  // defineEmits(['shijian']);
  
  //当前子组件接收父组件的方法shijian0（再添加其他功能）
  const otherEmits = defineEmits(['shijian']);
  function abc():void{
    console.log("会做其他执行操作")
    otherEmits('shijian')
  }
</script>

<template>
  <div class="child">
    <h3>子组件</h3>
    从父组件传到子组件的值是{{prop1}}


    <!-- 第一种：子组件触发父组件中的方法shijian0 （简单功能） -->
    <button type="button" @click="$emit('shijian')">触发父组件reset方法(（简单功能）)</button>
    <!-- 第二种：子组件触发父组件中的方法shijian0 （再添加其他功能）-->
    <button type="button" @click="abc">触发父组件reset方法（再添加其他功能）</button>
  </div>
</template>

<style scoped lang="less">

</style>