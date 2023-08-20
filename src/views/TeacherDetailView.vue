<script setup lang="ts">
import type { Ref } from 'vue'
import type { TeacherDetail } from '@/type'
import { ref, type PropType } from 'vue'
import TeacherService from '@/services/TeacherService'

defineProps({
  teacher: {
    type: Object as PropType<TeacherDetail>,
    require: true
  },
  reviews: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <p>Teacher Detail Information</p>
    <div v-if="teacher">
      <p><span class="font-bold">First Name :</span> {{ teacher.FirstName }}</p>
      <p><span class="font-bold">Last Name :</span> {{ teacher.LastName }}</p>
      <p><span class="font-bold">Department :</span> {{ teacher.Department }}</p>
      <p><span class="font-bold mb-10">Email :</span> {{ teacher.Email }}</p>
    </div>
  </div>
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ review.name }} gave this {{ review.rating }} stars
        <br />
        "{{ review.review }}"
        <br />
        Answer:
        <br />
        "{{ review.rec }}"
      </li>
    </ul>
  </div>
</template>
