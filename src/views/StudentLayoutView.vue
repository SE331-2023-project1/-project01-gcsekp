<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail } from '@/type'
import { ref, type PropType } from 'vue'
import StudentService from '@/services/StudentService'
import { useRouter } from 'vue-router'

const student = ref<StudentDetail | null>(null)
const router = useRouter()

const props = defineProps({
  id: {
    type: String as PropType<string>,
    required: true
  }
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
      <img
        class="mb-5 rounded-full w-24 h-24 border-2 border-none"
        :src="student.stu_pic"
        alt="img"
      />
      <hr class="mb-5" />
      <div id="nav" class="flex gap-4 mb-10 mt-10">
        <RouterLink
          class="details-button py-2 px-4 text-lg bg-white rounded-md text-black hover:bg-blue-600 hover:text-white transform hover:scale-105"
          :to="{ name: 'student-detail', params: { id: student.id } }"
          >Details</RouterLink
        >

        <RouterLink
          class="details-button py-2 px-4 text-lg bg-white rounded-md text-black hover:bg-blue-600 hover:text-white transform hover:scale-105"
          :to="{ name: 'student-teacher', params: { id: student.id } }"
        >
          Advisor
        </RouterLink>
      </div>
    </div>
    <RouterView class="mt-3" :student="student"></RouterView>
  </div>
</template>
<style scoped></style>
