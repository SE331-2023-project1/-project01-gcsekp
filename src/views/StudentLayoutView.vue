<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail } from '@/type'
import { ref, type PropType } from 'vue'
import StudentService from '@/services/StudentService'
import { useRouter } from 'vue-router'

const student = ref<StudentDetail | null>(null)
const router = useRouter()

const props = defineProps({
  id: String
})

StudentService.getStudentById(Number(props.id))
  .then((response) => {
    student.value = response.data
  })
  .catch((error) => {
    console.log(error)
    if (error.response && error.response.status === 404) {
      router.push({ name: '404-resource', params: { resource: 'student' } })
    } else {
      router.push({ name: 'network-error' })
    }
  })
</script>

<template>
  <div>
    <div v-if="student">
      <img class="mb-5" :src="student.stu_pic" alt="img" />
      <hr class="mb-5" />
      <div id="nav" class="button-container">
        <RouterLink
          class="button details-button"
          :to="{ name: 'student-detail', params: { id: student.id } }"
          >Details</RouterLink
        >

        <RouterLink
          class="button details-button"
          :to="{ name: 'student-advisor', params: { id: student.id } }"
        >
          Advisor
        </RouterLink>
      </div>
    </div>
    <RouterView class="mt-3" :student="student"></RouterView>
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
.button-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}
.details-button {
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.2s;
}

.details-button:hover {
  background-color: #2779bd;
  transform: scale(1.05);
}
</style>
