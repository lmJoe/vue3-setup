import * as VueRouter from 'vue-router'
const routes: Array<VueRouter.RouteRecordRaw> = [
  { path: '/Home', name: 'Home',  component: () => import('/src/views/index.vue') },
  { path: '/', redirect: '/Home'},
  { path: '/Project1', name: 'Project1',  component: () => import('/src/components/project1.vue') },
  { path: '/Project2', name: 'Project2',  component: () => import('/src/components/project2.vue') },
  { path: '/Project3', name: 'Project3',  component: () => import('/src/components/project3.vue') },
  { path: '/Project4', name: 'Project4',  component: () => import('/src/components/project4.vue') },
  { path: '/Project5', name: 'Project5',  component: () => import('/src/components/project5.vue') },
  { path: '/Project6', name: 'Project6',  component: () => import('/src/components/project6.vue') },
  { path: '/Project7', name: 'Project7',  component: () => import('/src/components/project7.vue') },
  { path: '/Project8', name: 'Project8',  component: () => import('/src/components/project8.vue') },
  
  
]
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})
export default router;