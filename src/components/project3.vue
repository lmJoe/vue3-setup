<template>
  <div>
    <h2>第三讲：对象的响应式代理-reactive</h2>
    <div>{{info}}</div>
    <input type="text" v-model="info.name">
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, shallowReactive, shallowRef } from "vue";
  //个人信息
  // 原始类型，也可以是原始对象，深层的响应式
  const info = ref(
    {
      name:'小明',
      score:{
        yuwen:88,
        math:92,
        other:{
          x:30
        }
      }
    }
  )
  //在更改属性时 使用info.value.name = '大明';
  info.value.name = '大明';
  


  // // 对象类型，深层的响应式
  // const info = reactive(
  //   {
  //     name:'小明',
  //     score:{
  //       yuwen:88,
  //       math:92,
  //       other:{
  //         x:30
  //       }
  //     }
  //   }
  // )



  // // 原始类型（也可以是对象型）深层的响应式 只对.value有效
  // const info = shallowRef(
  //   {
  //     name:'小明',
  //     score:{
  //       yuwen:88,
  //       math:92,
  //       other:{
  //         x:30
  //       }
  //     }
  //   }
  // )
  // //在更改属性时 使用info.value.name = '大明';
  // info.value = {
  //   name:'大明',
  //   score:{
  //     yuwen:99,
  //     math:50,
  //     other:{
  //         x:30
  //     }
  //   }
  // }




  // // 对象型 浅层的响应式，只对根级别的属性有效
  // const info = shallowReactive(
  //   {
  //     name:'小明',
  //     score:{
  //       yuwen:88,
  //       math:92,
  //       other:{
  //         x:30
  //       }
  //     }
  //   }
  // )
  
</script>

<style scoped>

</style>