<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail } from '@/type'
import { ref, type PropType } from 'vue'
import AdvisorService from '@/services/AdvisorService'

const advisor = ref<TeacherDetail | null>(null)

defineProps({
  advisor: {
    type: Object as PropType<TeacherDetail>,
    required: true
  }
})
</script>

<template>
  <p>Advisor Detail Information here</p>
  <div>
    <div v-if="advisor">
      <p><span class="font-bold">First Name :</span> {{ advisor.FirstName }}</p>
      <p><span class="font-bold">Last Name :</span> {{ advisor.LastName }}</p>
      <p><span class="font-bold">Department :</span> {{ advisor.Department }}</p>
      <p><span class="font-bold mb-10">Registered on :</span> {{ advisor.Email }}</p>
    </div>
  </div>
</template>
