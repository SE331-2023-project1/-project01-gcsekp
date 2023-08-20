import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'
import StudentLayoutView from '../views/StudentLayoutView.vue'
import TeacherView from '../views/TeacherView.vue'
import StudentAdvisorView from '../views/StudentAdvisorView.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import NotFoundView from '@/views/NotFoundView.vue'
import TeacherDetailView from '@/views/TeacherDetailView.vue'
import TeacherLayoutView from '@/views/TeacherLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'students',
      component: StudentView
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: TeacherView
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },

    {
      path: '/student/:id',
      name: 'student-layout',
      component: StudentLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'student-detail',
          component: StudentDetailView,
          props: true
        },
        {
          path: 'advisor',
          name: 'student-advisor',
          component: StudentAdvisorView,
          props: true
        }
      ]
    },
    {
      path: '/teacher/:id',
      name: 'teacher-detail',
      component: TeacherLayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'teacher-detail',
          component: TeacherDetailView,
          props: true
        }
      ]
    }
  ]
})
// Start the progress bar on navigation
router.beforeEach(() => {
  NProgress.start()
})

// Complete the progress bar after navigation
router.afterEach(() => {
  NProgress.done()
})

export default router
