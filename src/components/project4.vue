<template>
  <div>
    <h2>第四讲：计算属性的使用-computed</h2>
    <div class="cnt">
      数值：<input type="number" v-model="nmb" placeholder="请输入数值">
      <br>
      <br>
      判断奇偶：{{enevOdd}}
      <br>
      <br>
      输入值的2倍：{{twice}}
    </div>
    <button type="button" @click="setValue">设置</button>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
const nmb = ref(0);
//创建一个计算属性computed(建立了与nmb的响应式关联)
const enevOdd = computed(()=>{
  return nmb.value%2==0 ? '偶数' : "奇数";
});
// const twice = computed(()=>{
//   return nmb.value*2;
// });
const twice = computed({
  get(){
    return nmb.value*2;
  },
  set(value){
    //设置nmb.value时，会触发get方法
      nmb.value = value;
  }
});
function setValue(){
  twice.value = 1024;
}
</script>

<style scoped>

</style>