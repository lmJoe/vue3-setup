<script setup lang="ts">
  import { ref } from "vue";
  import ChildVue2 from "../views/child2.vue";
  const zero = 3;
  const number= ref(zero);
</script>

<template>
  <div class="fatherBox">
    <h2>第八讲：插槽的使用</h2>
    <h2>父组件：</h2>
  </div>
  <div class="children box">
    <ChildVue2>
      <template v-slot:title>
        春天来了1
      </template>
      <template #default>
        春天来了2
      </template>
      <template #footer>
        春天来了3
      </template>
    </ChildVue2>
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