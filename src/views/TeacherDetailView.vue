<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail, Review } from '@/type'
// import { ref, type PropType } from 'vue'
import { ref, defineProps } from 'vue'
import TeacherService from '@/services/TeacherService'

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
    <!-- Loop through reviews and display them using v-for -->
    <div v-for="review in reviews" :key="review.id">
      <p>Review: {{ review.reviewText }}</p>
      <p>Rating: {{ review.rating }}</p>
    </div>
  </div>
</template>
