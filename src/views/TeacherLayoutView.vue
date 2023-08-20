<script setup lang="ts">
import type { TeacherDetail, Review } from '@/type'
import { ref, defineProps, onMounted } from 'vue'
import TeacherService from '@/services/TeacherService'
import { RouterLink, RouterView } from 'vue-router'

// import { useRouter } from 'vue-router'

const teacher = ref<TeacherDetail | null>(null)
const reviews = ref<Review[]>([]) // Initialize the reviews array

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

    console.log('Fetching teacher reviews...')
    // Fetch teacher reviews
    const reviewsResponse = await TeacherService.getTeacherReviews(Number(props.id))
    reviews.value = reviewsResponse.data
    console.log('Teacher reviews:', reviewsResponse.data)
  } catch (error) {
    console.error(error)
    // Handle error here
    console.error('Error fetching teacher details or reviews:', error)
  }
})
</script>

<template>
  <div>
    <div v-if="teacher">
      <img class="mb-5" :src="teacher.Advisor_pic" alt="img" />
      <hr class="mb-5" />
      <div id="nav">
        <RouterLink
          class="w-1/2 mr-3 text-green-500 py-2 rounded text-center"
          :to="{ name: 'teacher-detail', params: { id } }"
          >Details</RouterLink
        >
      </div>
      <TeacherDetailView :teacher="teacher" :reviews="reviews" />
    </div>
    <div class="mt-3">
      <RouterView :teacher="teacher" />
    </div>
  </div>
</template>
