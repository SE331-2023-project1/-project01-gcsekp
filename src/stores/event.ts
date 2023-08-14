import type { StudentDetail } from '@/type'
import { defineStore } from 'pinia'
export const useEventStore = defineStore('event', {
  state: () => ({
    event: null as StudentDetail | null
  }),
  actions: {
    setEvent(event: StudentDetail) {
      this.event = event
    }
  }
})
