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
    console.log('Fetched teacher data:', response.data) // Add this line
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
  <div class="teacher">
    <TeacherCard
      v-for="teacher in displayedTeacher"
      :key="teacher.id"
      :teacher="teacher"
    ></TeacherCard>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1" class="button">PrevPage</button>

      <button
        @click="nextPage"
        :disabled="currentPage === Math.ceil(teacher.length / itemsPerPage)"
        class="button"
      >
        NextPage
      </button>
    </div>
  </div>
</template>
<style scoped>
.teacher {
  position: relative;
  background: transparent;
}
.pagination {
  background: transparent;
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* padding: 10px; */
  margin: 10px;
}

.button {
  padding: 10px 20px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
  color: #333;
  cursor: pointer;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
