<script setup lang="ts">
import type { TeacherDetail } from '@/type'
import { ref, onMounted } from 'vue'
import TeacherService from '@/services/TeacherService'
import { RouterLink, RouterView } from 'vue-router'

// import { useRouter } from 'vue-router'

const teacher = ref<TeacherDetail | null>(null)

const props = defineProps({
  id: String
})

onMounted(async () => {
  try {
    console.log('Fetching teacher details...')
    // Fetch teacher details
    const teacherResponse = await TeacherService.getTeacherById(Number(props.id))
    teacher.value = teacherResponse.data
    console.log('Teacher details:', teacherResponse.data)
  } catch (error) {
    console.error(error)
    // Handle error here
    console.error('Error fetching teacher details or reviews:', error)
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div v-if="teacher" class="mt-5">
      <img
        class="mb-5 rounded-full w-32 h-32 border-2 border-none"
        :src="teacher.Advisor_pic"
        alt="img"
      />
      <hr class="mb-5" />
      <div class="details mt-5;">
        <RouterLink :to="{ name: 'teacher-detail', params: { id } }" class="text-xl font-bold"
          >Details</RouterLink
        >
        <p><span class="font-bold">First Name :</span> {{ teacher.FirstName }}</p>
        <p><span class="font-bold">Last Name :</span> {{ teacher.LastName }}</p>
        <p><span class="font-bold">Department :</span> {{ teacher.Department }}</p>
        <p><span class="font-bold">Email :</span> {{ teacher.Email }}</p>
      </div>
    </div>
    <div class="mt-3">
      <RouterView :teacher="teacher" />
    </div>
  </div>
</template>
<style scoped>
.details p {
  @apply mb-2;
}
</style>
