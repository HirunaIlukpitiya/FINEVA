import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component:()=>import('../views/Home.vue')
    },
    {
      path:"/SignIn",
      name:"SignIn",
      component:()=>import('../views/Signin.vue')
    },
    {
      path:"/driverReg",
      name:"driverReg",
      component:()=>import('../views/driverReg.vue')
    },
    {
      path:"/policeReg",
      name:"policeReg",
      component:()=>import('../views/policeReg.vue')
    },
    {
      path:"/policeHome",
      name:"policeHome",
      component:()=>import('../views/policeHome.vue')
    }
  ]
})

export default router
