<template>
  <div
    class="StudentDetail-class border-2 border-blue-950 w20-h20 rounded-lg shadow-lg m-5 bg-white px-10 py-8 text-blue-950 text-base font-mono hover:bg-blue-50 cursor-pointer"
  >
    <span> First Name: {{ student.FirstName }}</span>
  </div>
  <RouterLink :to="{ name: 'student-detail', params: { id: student.id } }">
    <div v-if="student" class="StudentDetail-class">
      <span> First Name: {{ student.FirstName }}</span>
      <p>Last Name: {{ student.LastName }}</p>
      <img :src="student.stu_pic" alt="img" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { type StudentDetail } from '@/type'

const StudentDetail = ref({})
const props = defineProps({
  student: {
    type: Object as () => StudentDetail,
    required: true
  }
})
</script>

<style scoped></style>
