<template>
  <!-- Wrap the card in a RouterLink to make it clickable -->
  <RouterLink
    :to="{ name: 'teacher-detail', params: { id: teacher.id } }"
    class="TeacherCard-container w-full border-2 border-blue-950 rounded-lg shadow-lg m-5 bg-white hover:bg-blue-50 cursor-pointer flex items-center px-6 py-4"
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
      <p class="text-blue-950 font-bold">Firstname:{{ teacher.FirstName }}</p>
      <p class="text-blue-950">Lastname:{{ teacher.LastName }}</p>
      <p class="text-gray-400">Department: {{ teacher.Department }}</p>
      <p class="text-gray-400">Email:{{ teacher.Email }}</p>
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
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.TeacherCard-profile {
  flex: none;
  margin-bottom: 20px;
}

.TeacherCard-profile img {
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
  .TeacherCard-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: none;
  }

  .TeacherCard-profile {
    margin-bottom: 0;
  }

  .TeacherCard-info {
    text-align: left;
    flex: 1;
    margin-left: 20px;
  }
}
</style>
