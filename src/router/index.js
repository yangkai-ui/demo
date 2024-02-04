import {
    createRouter,
    createWebHashHistory,
    createWebHistory
  } from "vue-router";
  
  const routes = [
      {
          path: '/',
          redirect: '/home'
      },
      {
          path: '/home',
          component: ()=>import('../views/home/Home.vue')
      },
      {
          path: '/detail',
          component: ()=>import('../views/detail/Detail.vue')
      },
  ]
  const Router = createRouter({
      history: createWebHashHistory(),
      routes,
      linkActiveClass: "active", // 设置激活的路由链接的类名
  })
  
  export default Router;