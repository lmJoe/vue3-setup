# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.



# Vue组合式Api
## 1.什么是组合式Api
setup环境下的API
## 2.为什么要用
* 样板内容简洁
* 能够使用纯ts声明props和自定义事件
* 运行时性能（模板会被编译成同一作用域内的渲染函数，避免了渲染上下文代理对象）
## 3.怎么用
```vue
  <script setup lang="ts">
    const age = 20;
    定义响应式变量
    const age = ref(20)
  </script>
  <template>
    {{age}}
  </template>
```
## 4.定义响应式变量 -- ref
```vue
  <script setup lang="ts">
    import { ref } from "vue";
    const age = 20;
    定义响应式变量
    const age = ref(20)
  </script>
  <template>
    {{age}}
  </template>
```
## 5.响应式变量的修改 -- ref
```vue
  <script setup lang="ts">
    import { ref } from "vue";
    const age = ref(20);
    响应式变量的修改
    function button(){
      age.value = '30';
    }
  </script>
  <template>
    {{age}}
  </template>
```
## 6.对象的响应式代理 -- reactive（实现对象响应式的函数）
```vue
  <script setup lang="ts">
    import { ref,reactive } from "vue";
      const info = reactive(
        {
          name:'小明',
          score:{
            yuwen:88,
            math:92,
          }
        }
      )
  </script>
  <template>
    <div>{{info}}</div>
    <input type="text" v-model="info.name">
  </template>
```
### 难点：
  `ref`用于定义 原始类型 （字符串、数值、布尔...）的响应式
  `reactive`用于实现对象类型的响应式
  注意：如果ref中传入的是对象型，则会自动(隐式)调用reactive
## 7.ref reactive shallowRef shallowReactive
    ref 原始类型，也可以是原始对象，深层的响应式
    reactive 对象类型，深层的响应式
    shallowRef 原始类型（也可以是对象型）深层的响应式 只对.value有效
    shallReactive 对象型 浅层的响应式，只对根级别的属性有效
## 8.全局注册和局部注册
  局部注册：在需要的组件内，`import`组件
  全局注册：在main.ts中 使用`vue.component('组件名称',组件对象)`;
## 9.计算属性的用法 -- computed
  注意：计算属性只有其对应的响应式变量发生变化才触发;
  `computed()`
  1.创建一个只读的
  ```vue
  
  <script>
    const nmb = ref(0);
    //创建一个计算属性computed(建立了与nmb的响应式关联)
    const enevOdd = computed(()=>{
      return nmb.value%2==0 ? '偶数' : "奇数";
    });
  </script>
  <template>
    <div>{{enevOdd}}</div>
  </template>
  ```


  2.创建一个可写的
  ```vue
    <script>
      const nmb = ref(0);
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
    <template>
      <button type="button" @click="setValue">设置</button>
      <div>{{twice}}</div>
    </template>
  
  ```
## 10.监听属性的使用 -- witch
  监听属性和计算属性的差异：
  相同点：都能对响应式数据源的变化进行相应的处理
  不同点：（使用在场景上）
    计算属性：是为了简化模板取值
    监听属性：可以在回调函数中执行副作用（如dom操作）
## 11.`reactive`响应式数据的监听
  ### 11.1 如果使用watch监听的reactive对象数据，则新值，旧值是一样的，因为对象是引用取值
  ```vue
    <script setup lang="ts">
      import { watch, ref, reactive} from "vue";
      //使用reactive
      const info = reactive({
        nick:'小张1',
        code:70,
      })
      //如果使用watch监听的reactive对象数据，则新值，旧值是一样的，因为对象是引用取值
      watch(info,(newVal,oldVal)=>{
        console.log(newVal,oldVal);
      })
    </script>
    <template>
      <div>
        <input type="number" v-model="info.code">
      </div>
    </template>
  ```
  ### 11.2 如果监听的是一个对象中的某个属性
  ```vue
    <script setup lang="ts">
      import { watch, ref, reactive} from "vue";
      //使用reactive
      const info = reactive({
        nick:'小张1',
        code:70,
      })
      //如果使用watch监听的reactive对象数据，则新值，旧值是一样的，因为对象是引用取值
      watch(()=>info.nick,(newVal,oldVal)=>{
        console.log(newVal,oldVal);
      })
    </script>
    <template>
      <div>
        <input type="number" v-model="info.code">
      </div>
    </template>
  ```
## 12. 父子组件传值
  ### 12.1 父传子
  父组件传值
  ```vue
  <template>
    <ChildVue :prop1="number" />
  </template>

  ```
  注意：组件传值中 **数据是单向流动的**
        解释：父组件值的改变能引起子组件值的变化，但子组件的值的改变不能改变父组件的值（非对象型数据）

  子组件接收
  ```vue
    <script setup lang="ts">
      //使用defineProps接收父组件传过来的值
      defineProps({
        prop1:Number,//接收prop1,数值类型为number
      });
    </script>
  ```
## 13.自定义事件(以子组件调用父组件中的方法为例)
  ### 第一步：监听事件
    在父组件设置一个自定义事件@shijian
    ```vue
      <template>
        <ChildVue @shijian="reset" :prop1="number" />
      </template>
    ```
  ### 第二步：声明触发事件（defineEmits）
    子组件使用defineEmits接收父组件方法shijian
    ```vue
      <script setup lang="ts">
        //当前子组件接收父组件的方法shijian
        defineEmits(['shijian']);
      </script>
    ```
  ### 第三步：触发事件
  子组件使用$emit('a')触发父组件中的方法,参数a为shijian0；触发父组件通过shijian这个方法去触发reset事件
    1.简单功能
    ```vue
      <template>
        <div class="child">
          <h3>子组件</h3>
          <button type="button" @click="$emit('shijian')">触发父组件方法</button>
        </div>
      </template>
    ```
    2.复杂功能（在触发父组件功能之前，在子组件内执行其他代码）
      先声明一个变量`emit`赋值`defineEmits(['shijian']);`
      再通过`emit`去调用，如`emit('shijian')`去触发父组件reset方法
    ```vue
      <script setup lang="ts">
        const emit = defineEmits(['shijian']);
        function abc(){
          console.log("子组件执行其他功能");
          emit('shijian')
        }
      </script>
      <template>
        <div class="child">
          <h3>子组件</h3>
          <button type="button" @click="abc">触发父组件方法</button>
        </div>
      </template>
    ```
## 14.setup语法下为组件实例暴露属性
  应用场景：非常简单的从 子组件 取的 父组件 的属性和方法
  重点：getCurrentInstance 取的当前组件的实例
        defineExpose 暴露属性的方法
  1.getCurrentInstance 获取当前组件实例
  ```vue
    <script setup lang="ts">
      import { getCurrentInstance, ref } from "vue";
      //getCurrentInstance取的vue当前挂载的实例
      const currents = getCurrentInstance();
      console.log('获取当前组件实例',currents.proxy);
      console.log('获取当前组件的父组件实例',currents.proxy.$parent);
    </script>
  ```
  2.暴露当前组件的属性和方法
  ```vue
      // 父组件暴露属性和方法
      <script setup lang="ts">
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
      // 子组件调用或接收父组件属性和方法
        // 第一种：复杂写法
        <script setup lang="ts">
          import { getCurrentInstance, ref } from "vue";
          //第一种 比较复杂
            const currents = getCurrentInstance();
            function abc(){
              //调用父组件的reset方法
              currents.proxy.$parent.reset();
            }
        </script>
        <template>
          <div class="child">
            <h3>子组件</h3>
            <button type="button" @click="abc">第一种：触发父组件的reset()（比较复杂）</button>
          </div>
        </template>
  ```
  ```vue
        // 第二种：简单写法
        <script setup lang="ts">
          import { getCurrentInstance, ref } from "vue";
            //直接在button中使用
            如` <button type="button" @click="$parent.reset()">第二种：触发父组件的reset()（比较简单）</button>`
        </script>
        <template>
          <div class="child">
            <h3>子组件</h3>
            <h3>父组件暴露出来的属性由当前子组件简单写法接收{{($parent.number)}}</h3>
            <button type="button" @click="$parent.reset()">第二种：触发父组件的reset()（比较简单）</button>
          </div>
        </template>
  ```
## 15. 插槽的使用
  * 插槽出口：`solt`元素
  * 插槽名称的定义
  * 为具名插槽传入内容：`v-solt`(简写`#`)
  内容：
    1.为何要使用插槽
      当需要：子组件规定结构和样式，父组件决定其内容
    2.插槽基础用法
      插槽的基本使用
      ```vue
        <!-- 父组件 -->
        <template>
          <div class="children box">
            <ChildVue2>春天来了</ChildVue2>
          </div>
        </template>
      ```
      ```vue
        <!-- 子组件 -->
        <template>
          <div class="card-title">
              <slot>秋天到了</slot>
            </div>
        </template>
      ```
      具名插槽的使用(多插槽)
      定义插槽名称：`<slot name="插槽名称">默认值</slot>`
      例子：
        ```vue
          <!-- 父组件 -->
          <template>
            <div class="children box">
              <ChildVue2>
                <template v-slot:title>
                  春天来了1
                </template>
                <template>
                  春天来了2
                </template>
                <template #footer>
                  春天来了3
                </template>
              </ChildVue2>
            </div>
          </template>
        ```
        ```vue
          <!-- 子组件 -->
          <template>
            <div>
              <slot name="title">秋天到了</slot>
            </div>
            <div>
              <slot>秋天到了</slot>
            </div>
            <div>
              <slot name="footer">秋天到了</slot>
            </div>
          </template>
        ```
        注意：`v-slot:名称`可以简写为`#名称`
        由以上可以看出有三种写法
        其中的default可以理解为
        在父组件`template`标签中没有设置`v-slot`或者设置`#default`或者没有设置任何属性，则在子组件中默认值把父组件中的内容传入子组件并接收

