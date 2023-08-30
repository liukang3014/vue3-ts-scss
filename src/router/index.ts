import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    // children:[
    //   {
    //     path:"/",
    //     name:"homeview",
    //     component:()=>import("../App.vue")
    //   }
    // ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('../views/Friends.vue')
  }
  ,
  {
    path: '/money',
    name: 'money',
    component: () => import('../views/Money.vue')
  }
]



export default routes
