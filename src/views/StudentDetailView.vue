<script setup lang="ts">
import type { Ref } from 'vue'
import type { StudentDetail } from '@/type'
import { ref, type PropType } from 'vue'
import StudentService from '@/services/StudentService'


defineProps({
  student: {
    type: Object as PropType<StudentDetail>,
    require: true
  },
  reviews: {
    type: Array,
    required: true,
  }

})

</script>
<script>
import Comments from 'src/components/Comments.vue'

export default {
  name: 'theComments',
  components: {
    Comments
  },
  data() {
    return {
      likes: 15,
      creator: {
        avatar: 'http://via.placeholder.com/100x100/a74848',
        user: 'exampleCreator'
      },
      current_user: {
        avatar: 'http://via.placeholder.com/100x100/a74848',
        user: 'exampler'
      },
      comments: [
        {
          id: 1,
          user: 'example',
          avatar: 'http://via.placeholder.com/100x100/a74848',
          text: 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ',
        },
        {
          id: 2,                            
          user: 'example1',
          avatar: 'http://via.placeholder.com/100x100/2d58a7',
          text: 'lorem ipsum dolor',
        },
        {
          id: 3,                            
          user: 'example2',
          avatar: 'http://via.placeholder.com/100x100/36846e',
          text: 'lorem ipsum dolor again',
        },
      ]
    }
  },
  methods: {
    submitComment: function(reply) {
      this.comments.push({
        id: this.comments.length + 1,
        user: this.current_user.user,
        avatar: this.current_user.avatar,
        text: reply
      });
    }
  }
}
</script>
<template>
  <div>
    <div v-if="student">
      <p><span class="font-bold">First Name :</span> {{ student.FirstName }}</p>
      <p><span class="font-bold">Last Name :</span> {{ student.LastName }}</p>
      <p><span class="font-bold">Student ID :</span> {{ student.Student_ID }}</p>
      <p><span class="font-bold mb-10">Registered on :</span> {{ student.registered }}</p>
    </div>
  </div>
  <div class="review-container">
        <h3>Reviews:</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name}} gave this {{ review.rating}} stars
                    <br/>
                    "{{ review.review }}"
                    <br/>
                    Answer:
                    <br/>
                    "{{ review.rec }}"
                </li>
            </ul>
    </div>
    <div id="theComments">
    <div class="comments-outside">
      <div class="comments-header">
        <div class="comments-stats">
            <span><i class="fa fa-thumbs-up"></i> {{ likes }}</span>
            <span><i class="fa fa-comment"></i> {{ comments.length }}</span>
          </div>
          <div class="post-owner">
            <div class="avatar">
              <img :src="creator.avatar" alt="">
            </div>
            <div class="username">
              <a href="#">@{{ creator.user }}</a>
            </div>
          </div>
        </div>
        <comments 
          :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
          :comments="comments"
          :current_user="current_user"
          @submit-comment="submitComment"
        ></comments>
    </div>

  </div>
</template>
