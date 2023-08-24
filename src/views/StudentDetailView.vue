<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail } from '@/type'
import { ref, type PropType } from 'vue'
import StudentService from '@/services/StudentService'

defineProps({
  student: {
    type: Object as PropType<StudentDetail>,
    require: true
  },
  reviews: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <div v-if="student">
      <p><span class="font-black-bold">First Name :</span> {{ student.FirstName }}</p>
      <p><span class="font-black-bold">Last Name :</span> {{ student.LastName }}</p>
      <p><span class="font-black-bold">Student ID :</span> {{ student.Student_ID }}</p>
      <p><span class="font-black-bold">Registered Courses :</span> {{ student.registered }}</p>
    </div>
  </div>
</template>
