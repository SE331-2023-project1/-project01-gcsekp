<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail, Review } from '@/type'
// import { ref, type PropType } from 'vue'
import { ref, defineProps } from 'vue'
import TeacherService from '@/services/TeacherService'
import TeacherComment from '@/components/TeacherComment.vue'

const { teacher, reviews } = defineProps({
  teacher: {
    type: Object as () => TeacherDetail,
    required: true
  },
  reviews: {
    type: Array as () => Review[],
    required: true
  }
})
</script>

<template>
  <div>
    <div v-if="teacher">
      <img class="mb-5" :src="teacher.Advisor_pic" alt="img" />
      <!-- Display other teacher details here -->
      <p><span class="font-bold">First Name :</span> {{ teacher.FirstName }}</p>
      <p><span class="font-bold">Last Name :</span> {{ teacher.LastName }}</p>
      <p><span class="font-bold">Department :</span> {{ teacher.Department }}</p>
      <p><span class="font-bold mb-10">Email :</span> {{ teacher.Email }}</p>
    </div>
    <TeacherComment :initialComments="reviews.map((review) => review.review)" />
  </div>
</template>
