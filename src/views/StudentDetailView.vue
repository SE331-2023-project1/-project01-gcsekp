<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail } from '@/type'
import { ref, type PropType } from 'vue'
import StudentService from '@/services/StudentService'

defineProps({
  student: {
    type: Object as PropType<StudentDetail>,
    require: true
  }
})
</script>

<template>
  <div>
    <div v-if="student">
      <p><span class="font-bold">First Name :</span> {{ student.firstName }}</p>
      <p><span class="font-bold">Last Name :</span> {{ student.lastName }}</p>
      <p><span class="font-bold">Student ID :</span> {{ student.studentID }}</p>
      <p><span class="font-bold mb-10">Registered on :</span> {{ student.registeredCourses }}</p>
    </div>
  </div>
</template>
