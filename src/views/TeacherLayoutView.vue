<!-- <script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail } from '@/type'
// import { ref, type PropType } from 'vue'
import { ref, defineProps, onMounted } from 'vue'
import AdvisorService from '@/services/AdvisorService'
import { useRouter } from 'vue-router'

const advisor = ref<TeacherDetail | null>(null)
const router = useRouter()

const props = defineProps({
  id: String
})

// AdvisorService.getTeacherById(Number(props.id))
//   .then((response) => {
//     advisor.value = response.data
//   })
//   .catch((error) => {
//     console.log(error)
//     if (error.response && error.response.status === 404) {
//       router.push({ name: '404-resource', params: { resource: 'advisor' } })
//     } else {
//       router.push({ name: 'network-error' })
//     }
//   })
onMounted(async () => {
  try {
    const response = await AdvisorService.getTeacherById(Number(props.id))
    advisor.value = response.data
  } catch (error) {
    console.error(error)
    if (error.response && error.response.status === 404) {
      router.push({ name: '404-resource', params: { resource: 'advisor' } })
    } else {
      router.push({ name: 'network-error' })
    }
  }
})
</script>

<template>
  <div>
    <div v-if="advisor">
      <img class="mb-5" :src="advisor.Advisor_pic" alt="img" />
      <hr class="mb-5" />
      <div id="nav">
        <RouterLink
          class="w-1/2 mr-3 text-green-500 py-2 rounded text-center"
          :to="{ name: 'advisor-detail', params: { id } }"
          >Details</RouterLink
        >
      </div>
    </div>
    <RouterView class="mt-3" :advisor="advisor"></RouterView>
  </div>
</template> -->
