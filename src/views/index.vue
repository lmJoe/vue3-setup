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
const submitForm = async (number:number) => {
    // const res = await GetToken('/token/client',JSON.stringify(GetTokenParams));
    await router.push({ path: "project"+number });
}
</script>

<template>
  <!-- <div>{{newsData.title}}</div>
  <div>{{newsData.description}}</div>
  <div>{{newsData.count}}</div> -->
  <div style="font-size:25px;">每讲中总结都在README.md文件中</div>
  <div class="forExample">
    <div @click="submitForm(1)">第一讲：声明一个响应式变量</div>
    <div @click="submitForm(2)">第二讲：响应式变量的修改-ref</div>
    <div @click="submitForm(3)">第三讲：对象的响应式代理-reactive</div>
    <div @click="submitForm(4)">第四讲：计算属性的使用-computed</div>
    <div @click="submitForm(5)">第五讲：监听器的使用-watch</div>
    <div @click="submitForm(6)">第六讲：组件传值(父传子,包含自定义事件子组件调用父组件方法)</div>
    <div @click="submitForm(7)">第七讲：为组件实例暴露属性或方法</div>
    <div @click="submitForm(8)">第八讲：插槽的使用</div>
  </div>
</template>

<style scoped lang="less">
  .forExample{
    margin-top:30px;
    div{
      margin-bottom:20px;
      cursor:pointer;
    }
  }
</style>