import { createRouter, createWebHistory } from 'vue-router'
import indexPage from '@/components/index/indexPage.vue'
import loginPage from '@/components/login/loginPage.vue'
import introductionPart from '@/components/index/introductionPart.vue'
import member from '@/components/index/member/memberPart.vue'
import personalData from '@/components/index/personal/personalData.vue'
import studyMaterials from '@/components/index/materials/studyMaterials.vue'
import activityPart from '@/components/index/acitivity/activityPart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/introduction',
      component: indexPage,
      children: [
        {
          path: '/introduction',
          component: introductionPart
        },
        {
          path: '/member',
          component: member
        },
        {
          path: '/personal',
          component: personalData
        },
        {
          path: '/materials',
          component: studyMaterials
        },
        {
          path: '/activity',
          component: activityPart
        }
      ]
    },
    {
      path: '/login',
      component: loginPage,
    },
  ],
})

export default router
