<template>
  <div>
    <h2>第五讲：监听器的使用-watch</h2>
    <input type="number" v-model="age">
    <input type="text" v-model="name">
  </div>
</template>

<script setup lang="ts">
import { watch, ref, reactive} from "vue";
const age = ref(0);
//使用数组同时监听两个变量
const name = ref('小张');
watch([age,name],(newVal,oldVal)=>{
  console.log(newVal,oldVal);
})

// 2.如果使用watch监听的reactive对象数据，则新值，旧值是一样的，因为对象是引用取值
// const info = reactive({
//   nick:'小张1',
//   code:70,
// })
// watch(info,(newVal,oldVal)=>{
//   console.log(newVal,oldVal);
// })


// 3.如果监听对象中的一个属性
// const info = reactive({
//   nick:'小张1',
//   code:70,
// })
// watch(()=>info.code,(newVal,oldVal)=>{
//   console.log(newVal,oldVal);
// })


//4. 监听ref创建的对象，在监听时需要deep:true进行深度侦测
// const info1 = ref({
//   nick:'小张',
//   code:70,
// })
// watch(info1,(newVal,oldVal)=>{
//   console.log(newVal,oldVal);
// },{deep:true})
</script>

<style scoped>

</style>