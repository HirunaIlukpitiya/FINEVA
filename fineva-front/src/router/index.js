import { createRouter, createWebHistory } from 'vue-router'
import store from "../store"
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component:Home,
      beforeEnter: (to, from, next) => {
        if (store.state.loggedIn == "DRIVER") {
            console.log(store.state.loggedIn )
            next({path:"/driverHome",
        })
      }
        else if (store.state.loggedIn == "POLICE") {
          console.log(store.state.loggedIn )
          next({path:"/policeHome",
      })
        }
        else{
            next()
        }
    }
    },
    {
      path:"/signIn",
      name:"signIn",
      component:()=>import('../views/Signin.vue'),
      beforeEnter: (to, from, next) => {
        if (store.state.loggedIn == "DRIVER") {
            next({path:"/driverHome",
        })}
        if (store.state.loggedIn == "POLICE") {
          next({path:"/policeHome",
      })
        }
        else{
            next()
        }
    }
    },
    {
      path:"/driverReg",
      name:"driverReg",
      component:()=>import('../views/driverReg.vue'),
    },
    {
      path:"/policeReg",
      name:"policeReg",
      component:()=>import('../views/policeReg.vue'),
    },
    {
      path:"/policeHome",
      name:"policeHome",
      component:()=>import('../views/policeHome.vue'),
    },
    {
      path:"/policeAddfine",
      name:"policeAddfine",
      component:()=>import('../views/policeAddfine.vue')
    },
    {
      path:"/driverHome",
      name:"driverHome",
      component:()=>import('../views/driverHome.vue')
    },
    {
      path:"/payment",
      name:"payment",
      component:()=>import('../views/payment.vue')
    },
    {
      path:"/policeProfile",
      name:"policeProfile",
      component:()=>import('../views/policeProfile.vue')
    },
    {
      path:"/driverProfile",
      name:"driverProfile",
      component:()=>import("../views/driverProfile.vue")
    },
    {
      path:"/fineHistory",
      name:"fineHistory",
      component:()=>import("../views/fineHistory.vue")
    },
    {
      path:"/finePay",
      name:"finePay",
      component:()=>import("../views/driverFPay.vue")
    },
    {
      path:"/help",
      name:"help",
      component:()=>import("../views/help.vue")
    },
  ]
})

export default router
