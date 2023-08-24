import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { TeacherDetail } from '@/type'

const apiClient: AxiosInstance = axios.create({
  // baseURL: 'http://localhost:3004',
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTeacher(): Promise<AxiosResponse<TeacherDetail[]>> {
    return apiClient.get<TeacherDetail[]>('/teacher')
  },
  getTeacherById(id: number): Promise<AxiosResponse<TeacherDetail>> {
    return apiClient.get<TeacherDetail>('teacher/' + id.toString())
  }
}
