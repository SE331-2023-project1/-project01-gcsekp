<template>
  <!-- Wrap the card in a RouterLink to make it clickable -->
  <RouterLink
    :to="{ name: 'teacher-detail', params: { id: teacher.id } }"
    class="TeacherCard-container flex items-center flex-col w-screen p-10 m-10 border-2 rounded-md"
  >
    <!-- Profile Picture Section -->
    <div class="TeacherCard-profile">
      <!-- Apply circular border to the profile picture -->
      <img
        :src="teacher.Advisor_pic"
        alt="Teacher Profile"
        class="rounded-full h-16 w-16 border-2 border-blue-950"
      />
    </div>
    <!-- Teacher Information Section -->
    <div class="TeacherCard-info ml-4">
      <!-- Display the first name in bold -->
      <p class="text-black-950 font-bold">Firstname:{{ teacher.FirstName }}</p>
      <p class="text-black-950">Lastname:{{ teacher.LastName }}</p>
      <p class="text-black-400">Department: {{ teacher.Department }}</p>
      <p class="text-black-400">Email:{{ teacher.Email }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { type TeacherDetail } from '@/type'

const TeacherDetail = ref({})
const props = defineProps({
  teacher: {
    type: Object as () => TeacherDetail,
    required: true
  }
})
</script>

<style scoped>
.TeacherCard-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vh; /* Full width */
  padding: 10px;
  margin: 10px;
  border: 2px solid;
  border-radius: 5px;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .TeacherCard-container {
    @apply flex items-center flex-row justify-between max-w-none p-4 m-4 border-2 rounded-md;
  }

  .TeacherCard-profile {
    @apply flex-none mb-0;
  }
  .TeacherCard-profile img {
    @apply rounded-full h-16 w-16 border-2 border-none;
  }

  .TeacherCard-info {
    @apply text-left flex-1 ml-4;
  }
}
</style>
