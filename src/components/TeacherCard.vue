<template>
  <!-- Wrap the card in a RouterLink to make it clickable -->
  <RouterLink
    :to="{ name: 'student-advisor', params: { id: advisor.id } }"
    class="TeacherCard-container border-2 border-blue-950 rounded-lg shadow-lg m-5 bg-white hover:bg-blue-50 cursor-pointer flex items-center px-6 py-4"
  >
    <!-- Profile Picture Section -->
    <div class="TeacherCard-profile">
      <!-- Apply circular border to the profile picture -->
      <img
        :src="advisor.advisor_pic"
        alt="Teacher Profile"
        class="rounded-full h-16 w-16 border-2 border-blue-950"
      />
    </div>
    <!-- Teacher Information Section -->
    <div class="TeacherCard-info ml-4">
      <!-- Display the first name in bold -->
      <p class="text-blue-950 font-bold">Firstname:{{ advisor.FirstName }}</p>
      <p class="text-blue-950">Lastname:{{ advisor.LastName }}</p>
      <p class="text-gray-400">Department:{{ advisor.Department }}</p>
      <p class="text-blue-950">Email:{{ advisor.Email }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { type TeacherDetail } from '@/type'

const TeacherDetail = ref({})
const props = defineProps({
  advisor: {
    type: Object as PropType<TeacherDetail>,
    required: true
  }
})
</script>

<style scoped>
.TeacherCard-container:hover {
  background-color: rgb(70, 90, 100);
}
.TeacherCard-container {
  transition: background-color 0.2s;
  background-color: rgb(97, 103, 122);
  color: white;
  align-items: center;
  margin: 20px 0;
  border-radius: 5px;
}

/* Profile picture section styling */
.TeacherCard-profile {
  /* Prevent the profile picture from shrinking */
  flex-shrink: 0;
}
img {
  border-radius: 550px;
}
.flex {
  display: flex;
}
.TeacherCard-info {
  margin-left: 20px; /* Adjust this value to control the space */
}
</style>
