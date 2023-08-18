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
}

.StudentCard-profile {
  flex: none;
  margin-bottom: 20px;
}

.StudentCard-profile img {
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: 0.5px solid none;
}

.text-blue-950 {
  color: #3490dc;
}

.text-gray-400 {
  color: #718096;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .StudentCard-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: none;
  }

  .StudentCard-profile {
    margin-bottom: 0;
  }

  .StudentCard-info {
    text-align: left;
    flex: 1;
    margin-left: 20px;
  }
}
</style>
