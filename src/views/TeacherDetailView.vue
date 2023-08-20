<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail, Review } from '@/type'
import { ref, type PropType } from 'vue'
// import TeacherService from '@/services/TeacherService'
import { defineProps } from 'vue'
import TeacherService from '@/services/TeacherService'
import TeacherComment from '@/components/TeacherComment.vue'

const { teacher, reviews } = defineProps({
  teacher: {
    type: Object as PropType<TeacherDetail>,
    required: true
  },
  reviews: {
    type: Array as PropType<Review[]>,
    required: true
  }
})
</script>

<template>
  <div>
    <div v-if="teacher">
      <p><span class="font-bold">First Name :</span> {{ teacher.FirstName }}</p>
      <p><span class="font-bold">Last Name :</span> {{ teacher.LastName }}</p>
      <p><span class="font-bold">Department :</span> {{ teacher.Department }}</p>
      <p><span class="font-bold mb-10">Email :</span> {{ teacher.Email }}</p>
    </div>
    <TeacherComment :initialComments="reviews.map((review) => review.review)" />
  </div>
</template>
