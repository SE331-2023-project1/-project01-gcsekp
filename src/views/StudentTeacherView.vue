<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail } from '@/type'
import { ref, type PropType } from 'vue'
import TeacherService from '@/services/TeacherService'

const teacher = ref<TeacherDetail | null>(null)

defineProps({
  advisor: {
    type: Object as PropType<TeacherDetail>,
    required: true
  }
})
</script>

<template>
  <p>Teacher Detail Information here</p>
  <div>
    <div v-if="teacher">
      <p><span class="font-black-bold">First Name :</span> {{ teacher.FirstName }}</p>
      <p><span class="font-black-bold">Last Name :</span> {{ teacher.LastName }}</p>
      <p><span class="font-black-bold">Department :</span> {{ teacher.Department }}</p>
      <p><span class="font-black-bold">Registered on :</span> {{ teacher.Email }}</p>
    </div>
  </div>
</template>
