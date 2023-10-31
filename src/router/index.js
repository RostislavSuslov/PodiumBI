import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PodiumBiPortalView from '../views/PodiumBiPortalView.vue'
import WalmartRetailDataView from '../views/WalmartRetailDataView.vue'
import ContactView from '../views/ContactView.vue'
import BlogView from '../views/BlogView.vue'
import CustomLayout from '@/layouts/CustomLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/podium-bi-portal',
      name: 'podium-bi-portal',
      component: PodiumBiPortalView,
     
    },
    {
      path: '/walmart-retail-data',
      name: 'walmart-retail-data',
      component: WalmartRetailDataView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {
        private: true,
        layout: CustomLayout,
      }
    },
  /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

window.isAuth = true;

router.beforeEach((to, from) => {
  console.log(to, from);
  if(to.meta.private){
    return window.isAuth 
  }
})
export default router
