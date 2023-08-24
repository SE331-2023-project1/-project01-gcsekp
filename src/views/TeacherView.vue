<script setup lang="ts">
import TeacherCard from '../components/TeacherCard.vue'
import TeacherService from '@/services/TeacherService'
import type { TeacherDetail } from '@/type'
import { ref, computed } from 'vue'
import type { Ref } from 'vue'

const teacher: Ref<Array<TeacherDetail>> = ref([])
const itemsPerPage = 5
const currentPage = ref(1)

TeacherService.getTeacher()
  .then((response) => {
    console.log('Fetched teacher data:', response.data)
    teacher.value = response.data
  })
  .catch((error) => {
    console.error('Error fetching teacher:', error)
  })

const nextPage = () => {
  if (currentPage.value < Math.ceil(teacher.value.length / itemsPerPage)) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const displayedTeacher = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return teacher.value.slice(startIndex, endIndex)
})
</script>

<template>
  <div class="teacher relative bg-transparent">
    <TeacherCard
      v-for="teacher in displayedTeacher"
      :key="teacher.id"
      :teacher="teacher"
    ></TeacherCard>
    <div class="pagination flex items-center gap-5 mt-5 bg-transparent flex-row">
      <button @click="prevPage" :disabled="currentPage === 1" class="button disabled:opacity-50">
        PrevPage
      </button>

      <button
        @click="nextPage"
        :disabled="currentPage === Math.ceil(teacher.length / itemsPerPage)"
        class="button disabled:opacity-50"
      >
        NextPage
      </button>
    </div>
  </div>
</template>
<style scoped>
.pagination {
  @apply bg-transparent flex flex-row items-center gap-5 mt-5;
}

.button {
  @apply px-5 py-2 text-sm border rounded bg-gray-100 text-gray-600 cursor-pointer;
}
.button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
