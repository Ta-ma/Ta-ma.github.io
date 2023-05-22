import TechnologiesView from '@/views/TechnologiesView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tech',
      name: 'technologies',
      component: TechnologiesView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView
    }
  ]
})

export default router
