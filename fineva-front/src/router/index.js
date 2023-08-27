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
      path:"/driverSignIn",
      name:"driverSignIn",
      component:()=>import('../views/driverSignIn.vue')
    },
    {
      path:"/policeSignIn",
      name:"policeSignIn",
      component:()=>import('../views/policeSignIn.vue')
    },
    {
      path:"/signIn",
      name:"signIn",
      component:()=>import('../views/signin.vue')
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
    },
    {
      path:"/policeResult",
      name:"policeResult",
      component:()=>import('../views/policeResult.vue')
    },
    {
      path:"/policeAddfine",
      name:"policeAddfine",
      component:()=>import('../views/policeAddfine.vue')
    },
  ]
})

export default router
