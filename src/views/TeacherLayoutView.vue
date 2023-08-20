<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail } from '@/type'
import { ref, type PropType } from 'vue'
import TeacherService from '@/services/TeacherService'
import { useRouter } from 'vue-router'

const teacher = ref<TeacherDetail | null>(null)
const router = useRouter()

const props = defineProps({
  id: String
})

TeacherService.getTeacherById(Number(props.id))
  .then((response) => {
    teacher.value = response.data
  })
  .catch((error) => {
    console.log(error)
    if (error.response && error.response.status === 404) {
      router.push({ name: '404-resource', params: { resource: 'teacher' } })
    } else {
      router.push({ name: 'network-error' })
    }
  })
</script>

<template>
  <div>
    <div v-if="teacher">
      <img class="mb-5" :src="teacher.Advisor_pic" alt="img" />
      <hr class="mb-5" />
      <div id="nav">
        <RouterLink
          class="w-1/2 mr-3 text-green-500 py-2 rounded text-center"
          :to="{ name: 'teacher-detail', params: { id } }"
          >Details</RouterLink
        >
      </div>
    </div>
    <RouterView class="mt-3" :teacher="teacher"></RouterView>
  </div>
</template>
