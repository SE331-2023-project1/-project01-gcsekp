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
        <RouterLink class="details" :to="{ name: 'teacher-detail', params: { id } }"
          >Details</RouterLink
        >
        <p><span class="font-bold">First Name :</span> {{ teacher.FirstName }}</p>
        <p><span class="font-bold">Last Name :</span> {{ teacher.LastName }}</p>
        <p><span class="font-bold">Department :</span> {{ teacher.Department }}</p>
        <p><span class="font-bold mb-10">Email :</span> {{ teacher.Email }}</p>
      </div>
      <TeacherDetailView :teacher="teacher" :reviews="reviews" />
    </div>
    <div class="mt-3">
      <RouterView :teacher="teacher" />
    </div>
  </div>
</template>
<style scoped>
img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 0.5px solid none;
  margin-bottom: 10px;
}
.details {
  color: white;
  font-size: large;
}
#nav {
  margin-top: 20px;
}
</style>
