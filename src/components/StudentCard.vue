<template>
  <div>
    <!-- Move RouterLink outside of the div -->
    <RouterLink :to="{ name: 'student-detail', params: { id: student.id } }">
      <div
        class="StudentDetail-class border-2 border-blue-950 w20-h20 rounded-lg shadow-lg m-5 bg-white px-10 py-8 text-blue-950 text-base font-mono hover:bg-blue-50 cursor-pointer"
      >
        <span> First Name: {{ student.FirstName }}</span>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { StudentDetail } from '@/type'

const props = defineProps({
  student: {
    type: Object as () => StudentDetail,
    required: true
  }
})
</script>

<style scoped></style>
