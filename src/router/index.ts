import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'
import StudentLayoutView from '../views/StudentLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'students',
      component: StudentView
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
        }
      ]
    }
  ]
})

export default router
