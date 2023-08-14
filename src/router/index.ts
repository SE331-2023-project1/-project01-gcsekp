import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'
import StudentLayoutView from '../views/StudentLayoutView.vue'
import TeacherView from '../views/TeacherView.vue'
import StudentAdvisorView from '../views/StudentAdvisorView.vue'

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
    }
  ]
})

export default router
