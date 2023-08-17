<template>
  <!-- Wrap the card in a RouterLink to make it clickable -->
  <RouterLink
    :to="{ name: 'student-detail', params: { id: student.id } }"
    class="StudentCard-container border-2 border-blue-950 rounded-lg shadow-lg m-5 bg-white hover:bg-blue-50 cursor-pointer flex items-center px-6 py-4"
  >
    <!-- Profile Picture Section -->
    <div class="StudentCard-profile">
      <!-- Apply circular border to the profile picture -->
      <img
        :src="student.stu_pic"
        alt="Student Profile"
        class="rounded-full h-16 w-16 border-2 border-blue-950"
      />
    </div>
    <!-- Student Information Section -->
    <div class="StudentCard-info ml-4">
      <!-- Display the first name in bold -->
      <p class="text-blue-950 font-bold">Firstname:{{ student.FirstName }}</p>
      <p class="text-blue-950">Lastname:{{ student.LastName }}</p>
      <p class="text-gray-400">Student_ID{{ student.Student_ID }}</p>
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
/* Container styling */
.StudentCard-container {
  transition: background-color 0.2s;
  background-color: rgb(97, 103, 122);
  color: white;
  align-items: center;
  margin: 20px 0;
  border-radius: 5px;
}

/* Hover effect */
.StudentCard-container:hover {
  background-color: rgb(70, 90, 100);
}

/* Profile picture section styling */
.StudentCard-profile {
  /* Prevent the profile picture from shrinking */
  flex-shrink: 0;
}
img {
  border-radius: 550px;
}
.flex {
  display: flex;
}
.StudentCard-info {
  margin-left: 20px; /* Adjust this value to control the space */
}
</style>
