<template>
  <div class="comment-container">
    <h3>Add Comment:</h3>
    <textarea v-model="newComment" rows="4" cols="50"></textarea>
    <button @click="addComment">Submit Comment</button>

    <h3>Comments:</h3>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'

// Props
const props = defineProps({
  initialComments: Array as PropType<string[]>
})

// State
const newComment = ref('')
const comments = ref(initialComments || [])

// Methods
const addComment = () => {
  if (newComment.value.trim() !== '') {
    comments.value.push(newComment.value)
    newComment.value = ''
  }
}
</script>
