import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

//创建vue实例
const vue = createApp(App);
// 全局注册组件
import MyFooterVue from "./views/MyFooter.vue";
vue.component('MyFooterVue',MyFooterVue)
vue.use(router).mount('#app')
