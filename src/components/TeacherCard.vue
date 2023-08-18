<template>
  <!-- Wrap the card in a RouterLink to make it clickable -->
  <RouterLink
    :to="{ name: 'student-advisor', params: { id: advisor.id } }"
    class="TeacherCard-container"
  >
    <!-- Profile Picture Section -->
    <div class="TeacherCard-profile">
      <!-- Apply circular border to the profile picture -->
      <img
        :src="advisor.Advisor_pic"
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

<!-- <style scoped>
.TeacherCard-container:hover {
  background-color: rgb(70, 90, 100);
}
.TeacherCard-container {
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

/* Profile picture section styling */
.TeacherCard-profile {
  /* Prevent the profile picture from shrinking */
  width: 100vh;
  flex-shrink: 0;
}
img {
  border-radius: 550px;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}

.TeacherCard-info {
  margin-left: 20px; /* Adjust this value to control the space */
}

.TeacherCard-info p {
  margin: 5px 0;
}
</style> -->

<style scoped>
.TeacherCard-container {
  display: flex;
  align-items: center;
  width: 100vh; /* Adjust the width as needed */
  padding: 10px;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.TeacherCard-profile {
  flex: none;
  margin-right: 20px;
}

.TeacherCard-profile img {
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: 0.5px solid none;
}

.TeacherCard-info {
  flex: 1;
}

.text-blue-950 {
  color: #3490dc;
}

.text-gray-400 {
  color: #718096;
}
</style>
