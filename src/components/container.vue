<script setup lang="ts">
  // let title:string = '标题';
  // interface News{
  //   title:string;
  //   description:string;
  //   count?:number;
  // }
  // //定义一个变量 实现这个接口
  // let newsData:News = {
  //   title:'我是一个新闻',
  //   description:'我是一个新闻的描述',
  //   count:1,

import router from "../router";

  // }
const submitForm = async (submitForm:object) => {
    // const res = await GetToken('/token/client',JSON.stringify(GetTokenParams));
    await router.push({ path: "project1" });
  }
</script>

<template>
  <!-- <div>{{newsData.title}}</div>
  <div>{{newsData.description}}</div>
  <div>{{newsData.count}}</div> -->
  <div>
    <div @click="submitForm()">第一讲：声明一个响应式变量</div>
  </div>
</template>

<style scoped lang="less">

</style>