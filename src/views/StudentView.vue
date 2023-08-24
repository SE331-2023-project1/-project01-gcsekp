<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import StudentService from '@/services/StudentService'
import type { StudentDetail } from '@/type'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

const students: Ref<Array<StudentDetail>> = ref([])
const itemsPerPage = 5
const currentPage = ref(1)

StudentService.getStudent()
  .then((response) => {
    console.log('Fetched student data:', response.data) // Add this line
    students.value = response.data
  })
  .catch((error) => {
    console.error('Error fetching students:', error)
  })

const nextPage = () => {
  if (currentPage.value < Math.ceil(students.value.length / itemsPerPage)) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const displayedStudents = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return students.value.slice(startIndex, endIndex)
})
</script>

<template>
  <div class="student">
    <StudentCard
      v-for="student in displayedStudents"
      :key="student.id"
      :student="student"
    ></StudentCard>
    <div class="pagination flex items-center gap-5 mt-5 bg-transparent flex-row">
      <button @click="prevPage" :disabled="currentPage === 1" class="button disabled:opacity-50">
        PrevPage
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === Math.ceil(students.length / itemsPerPage)"
        class="button disabled:opacity-50"
      >
        NextPage
      </button>
    </div>
  </div>
</template>
<style scoped>
.button {
  @apply px-5 py-2 text-sm border rounded bg-gray-100 text-gray-600 cursor-pointer;
}
.button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
.pagination {
  @apply bg-transparent flex flex-row items-center gap-5 mt-5;
}
</style>
