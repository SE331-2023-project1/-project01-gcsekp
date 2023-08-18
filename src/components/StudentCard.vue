<template>
  <!-- Wrap the card in a RouterLink to make it clickable -->
  <RouterLink
    :to="{ name: 'student-detail', params: { id: student.id } }"
    class="StudentCard-container w-full border-2 border-blue-950 rounded-lg shadow-lg m-5 bg-white hover:bg-blue-50 cursor-pointer flex items-center px-6 py-4"
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
  align-items: center;
  border-radius: 5px;
  margin: 20px auto;
  width: auto;
  display: flex;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Hover effect */
.StudentCard-container:hover {
  background-color: rgb(70, 90, 100);
}

/* Profile picture section styling */
.StudentCard-profile {
  width: 100vh;
  flex-shrink: 0;
}
img {
  border-radius: 208px;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
}
.flex {
  display: flex;
}
.StudentCard-info {
  margin-left: 20px;
}
</style>
