<template>
  <!-- Wrap the card in a RouterLink to make it clickable -->
  <RouterLink
    :to="{ name: 'student-detail', params: { id: student.id } }"
    class="StudentCard-container flex items-center flex-col w-screen p-10 m-10 bg-white rounded-md shadow-md border-2"
  >
    <!-- Profile Picture Section -->
    <div class="StudentCard-profile">
      <!-- Apply circular border to the profile picture -->
      <img
        :src="student.stu_pic"
        alt="Student Profile"
        class="rounded-full w-16 h-16 border-2 border-none"
      />
    </div>
    <!-- Student Information Section -->
    <div class="StudentCard-info ml-4">
      <!-- Display the first name in bold -->
      <p class="text-black-950 font-bold">Firstname:{{ student.FirstName }}</p>
      <p class="text-black-950 font-bold">Lastname:{{ student.LastName }}</p>
      <p class="text-black-950 font-bold">Student_ID{{ student.Student_ID }}</p>
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

<style scoped>
.StudentCard-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vh; /* Full width */
  padding: 10px;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .StudentCard-container {
    @apply flex items-center flex-row justify-between max-w-none p-4 m-4 bg-white rounded-md shadow-md border-2;
  }

  .StudentCard-profile {
    @apply flex-none mb-0;
  }

  .StudentCard-info {
    @apply text-left flex-1 ml-4;
  }
}
</style>
