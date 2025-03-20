import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import Mobile from '../views/Mobile.vue'
import Documentation from '../views/Documentation.vue'
import Management from '../views/Management.vue'
import Team from '../views/Team.vue'
import Cgu from '../views/Cgu.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: Mobile
    },
    {
      path: '/docs',
      name: 'documentation',
      component: Documentation
    },
    {
      path: '/management',
      name: 'management',
      component: Management
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/cgu',
      name: 'cgu',
      component: Cgu
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
