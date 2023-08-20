<!-- <template>

  <RouterLink
    :to="{ name: 'student-advisor', params: { id: advisor.id } }"
    class="TeacherCard-container"
  >

    <div class="TeacherCard-profile">
 
      <img
        :src="advisor.Advisor_pic"
        alt="Teacher Profile"
        class="rounded-full h-16 w-16 border-2 border-blue-950"
      />
    </div>

    <div class="TeacherCard-info ml-4">

      <p class="text-blue-950 font-bold">Firstname:{{ advisor.FirstName }}</p>
      <p class="text-blue-950">Lastname:{{ advisor.LastName }}</p>
      <p class="text-gray-400">Department:{{ advisor.Department }}</p>
      <p class="text-blue-950">Email:{{ advisor.Email }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { type TeacherDetail } from '@/type'

const TeacherDetail = ref({})
const props = defineProps({
  advisor: {
    type: Object as PropType<TeacherDetail>,
    required: true
  }
})
</script>

<style scoped>
.TeacherCard-container {
  display: flex;
  align-items: center;
  width: 100vh; 
  padding: 10px;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.TeacherCard-profile {
  flex: none;
  margin-right: 20px;
}

.TeacherCard-profile img {
  border-radius: 50%;
  width: 64px;
  height: 64px;
  border: 0.5px solid none;
}

.text-blue-950 {
  color: #3490dc;
}

.text-gray-400 {
  color: #718096;
}

@media (min-width: 768px) {
  .TeacherCard-container {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: none;
  }

  .TeacherCard-profile {
    margin-bottom: 0;
  }

  .TeacherCard-info {
    text-align: left;
    flex: 1;
  }
}
</style> -->
