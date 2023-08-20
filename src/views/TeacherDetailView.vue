<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail } from '@/type'
// import { ref, type PropType } from 'vue'
import { ref, defineProps } from 'vue'
import AdvisorService from '@/services/AdvisorService'

const props = defineProps({
  advisor: {
    type: Object as () => TeacherDetail,
    required: true
  }
})
</script>

<template>
  <p>Registration from here</p>
  <div>
    <div v-if="advisor">
      <p><span class="font-bold">First Name :</span> {{ props.advisor.FirstName }}</p>
      <p><span class="font-bold">Last Name :</span> {{ props.advisor.LastName }}</p>
      <p><span class="font-bold">Department :</span> {{ props.advisor.Department }}</p>
      <p><span class="font-bold mb-10">Registered on :</span> {{ props.advisor.Email }}</p>
    </div>
  </div>
</template>
